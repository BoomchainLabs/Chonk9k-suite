// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'stats',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stats',
  operationId: 'getPlatformStats',
};

export const tool: Tool = {
  name: 'retrieve_stats',
  description: 'Retrieve overall platform statistics and metrics',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.stats.retrieve());
};

export default { metadata, tool, handler };
