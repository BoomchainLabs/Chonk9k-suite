// errorsync-oauth-integration.ts

import { Express, Request, Response, NextFunction } from 'express';
import session from 'express-session';
import axios from 'axios';
import express from 'express';

const authRouter = express.Router();
const sentryApiRouter = express.Router();

const SENTRY_CLIENT_ID = process.env.SENTRY_CLIENT_ID!;
const SENTRY_CLIENT_SECRET = process.env.SENTRY_CLIENT_SECRET!;
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-secret';

// Use boomchainlab.com as redirect URI domain
const SENTRY_REDIRECT_URI = process.env.SENTRY_REDIRECT_URI || 'https://boomchainlab.com/auth/sentry/callback';

interface SessionData {
  accessToken?: string;
  refreshToken?: string;
  user?: { id: string; name: string; email?: string };
}

// OAuth callback route
authRouter.get('/sentry/callback', async (req: Request & { session: SessionData }, res: Response, next: NextFunction) => {
  const { code } = req.query;
  if (!code || typeof code !== 'string') return res.status(400).send('Missing code parameter');

  try {
    // Exchange code for tokens
    const tokenResponse = await axios.post('https://sentry.io/oauth/token/', null, {
      params: {
        client_id: SENTRY_CLIENT_ID,
        client_secret: SENTRY_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: SENTRY_REDIRECT_URI,
      },
    });

    const { access_token, refresh_token } = tokenResponse.data;

    // Save tokens in session
    req.session.accessToken = access_token;
    req.session.refreshToken = refresh_token;

    // Fetch user info from Sentry API
    const userResponse = await axios.get('https://sentry.io/api/0/users/me/', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    req.session.user = {
      id: userResponse.data.id,
      name: userResponse.data.name || userResponse.data.email || 'Unknown',
      email: userResponse.data.email,
    };

    // Redirect to frontend dashboard or wherever
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

// Middleware to require auth
function requireAuth(req: Request & { session: SessionData }, res: Response, next: NextFunction) {
  if (req.session?.accessToken) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}

// Example route to fetch organizations
sentryApiRouter.get('/organizations', requireAuth, async (req: Request & { session: SessionData }, res: Response, next: NextFunction) => {
  try {
    const response = await axios.get('https://sentry.io/api/0/organizations/', {
      headers: {
        Authorization: `Bearer ${req.session.accessToken}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

export default function integrateErrorSyncOAuth(app: Express) {
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );

  // Update CORS or helmet or other middleware as needed
  // Example: CORS middleware to allow boomchainlab.com frontend origin
  // app.use(cors({ origin: 'https://boomchainlab.com', credentials: true }));

  app.use('/api/auth', authRouter);
  app.use('/api/sentry', sentryApiRouter);
}