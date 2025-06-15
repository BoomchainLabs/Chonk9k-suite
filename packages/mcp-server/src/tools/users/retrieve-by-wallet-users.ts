// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/wallet/{address}',
  operationId: 'getUserByWallet',
};

export const tool: Tool = {
  name: 'retrieve_by_wallet_users',
  description: 'Retrieve user details by their blockchain wallet address',
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  const { address, ...body } = args as any;
  return asTextContentResult(await client.users.retrieveByWallet(address));
};

export default { metadata, tool, handler };
