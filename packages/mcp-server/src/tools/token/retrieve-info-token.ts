// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'token',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/token/info',
  operationId: 'getTokenInfo',
};

export const tool: Tool = {
  name: 'retrieve_info_token',
  description: 'Retrieve current information about the $LERF token',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.token.retrieveInfo());
};

export default { metadata, tool, handler };
