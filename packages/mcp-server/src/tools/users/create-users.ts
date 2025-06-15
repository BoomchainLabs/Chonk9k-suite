// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users',
  operationId: 'createUser',
};

export const tool: Tool = {
  name: 'create_users',
  description: 'Register a new user in the system with their wallet address',
  inputSchema: {
    type: 'object',
    properties: {
      walletAddress: {
        type: 'string',
        description: "User's blockchain wallet address",
      },
      email: {
        type: 'string',
        description: "User's email address",
      },
      referralCode: {
        type: 'string',
        description: 'Referral code used during signup',
      },
      username: {
        type: 'string',
        description: "User's chosen username",
      },
    },
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.users.create(body));
};

export default { metadata, tool, handler };
