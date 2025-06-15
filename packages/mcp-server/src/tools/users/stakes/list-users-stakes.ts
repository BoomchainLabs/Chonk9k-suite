// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'users.stakes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{userId}/stakes',
  operationId: 'getUserStakes',
};

export const tool: Tool = {
  name: 'list_users_stakes',
  description: 'Retrieve all staking positions for a specific user',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  return asTextContentResult(await client.users.stakes.list(userId));
};

export default { metadata, tool, handler };
