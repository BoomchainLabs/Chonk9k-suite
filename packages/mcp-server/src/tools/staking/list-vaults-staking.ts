// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'earn-app-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import EarnApp from 'earn-app';

export const metadata: Metadata = {
  resource: 'staking',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/staking/vaults',
  operationId: 'getStakingVaults',
};

export const tool: Tool = {
  name: 'list_vaults_staking',
  description: 'Retrieve all available staking vaults',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: EarnApp, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.staking.listVaults());
};

export default { metadata, tool, handler };
