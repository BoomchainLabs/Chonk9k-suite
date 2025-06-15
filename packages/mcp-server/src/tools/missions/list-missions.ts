// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'missions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/missions',
  operationId: 'getMissions',
};

export const tool: Tool = {
  name: 'list_missions',
  description: 'Retrieve the list of all available missions',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        description: 'Filter missions by category',
      },
      status: {
        type: 'string',
        description: 'Filter missions by status',
        enum: ['active', 'inactive', 'completed'],
      },
    },
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.missions.list(body));
};

export default { metadata, tool, handler };
