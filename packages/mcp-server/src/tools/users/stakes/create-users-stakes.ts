// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'users.stakes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users/{userId}/stakes',
  operationId: 'createUserStake',
};

export const tool: Tool = {
  name: 'create_users_stakes',
  description: 'Stake tokens in a vault',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'integer',
      },
      amount: {
        type: 'number',
        description: 'Amount to stake',
      },
      vaultId: {
        type: 'integer',
        description: 'Vault identifier',
      },
      autoCompound: {
        type: 'boolean',
        description: 'Whether to auto-compound rewards',
      },
      lockPeriod: {
        type: 'integer',
        description: 'Lock period in days',
      },
    },
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  return asTextContentResult(await client.users.stakes.create(userId, body));
};

export default { metadata, tool, handler };
