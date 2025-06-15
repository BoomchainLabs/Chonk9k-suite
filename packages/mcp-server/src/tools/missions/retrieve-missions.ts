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
  httpPath: '/missions/{id}',
  operationId: 'getMissionById',
};

export const tool: Tool = {
  name: 'retrieve_missions',
  description: 'Retrieve detailed information about a specific mission',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.missions.retrieve(id));
};

export default { metadata, tool, handler };
