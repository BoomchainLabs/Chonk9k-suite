// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_users from './users/create-users';
import list_missions_users from './users/list-missions-users';
import list_referrals_users from './users/list-referrals-users';
import retrieve_by_wallet_users from './users/retrieve-by-wallet-users';
import create_users_stakes from './users/stakes/create-users-stakes';
import list_users_stakes from './users/stakes/list-users-stakes';
import retrieve_missions from './missions/retrieve-missions';
import list_missions from './missions/list-missions';
import list_vaults_staking from './staking/list-vaults-staking';
import retrieve_stats from './stats/retrieve-stats';
import retrieve_info_token from './token/retrieve-info-token';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_users);
addEndpoint(list_missions_users);
addEndpoint(list_referrals_users);
addEndpoint(retrieve_by_wallet_users);
addEndpoint(create_users_stakes);
addEndpoint(list_users_stakes);
addEndpoint(retrieve_missions);
addEndpoint(list_missions);
addEndpoint(list_vaults_staking);
addEndpoint(retrieve_stats);
addEndpoint(retrieve_info_token);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
