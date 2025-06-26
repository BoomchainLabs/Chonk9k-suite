// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StakingAPI from '../staking';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stakes extends APIResource {
  /**
   * Stake tokens in a vault
   */
  create(userID: number, body: StakeCreateParams, options?: RequestOptions): APIPromise<UserStake> {
    return this._client.post(path`/users/${userID}/stakes`, { body, ...options });
  }

  /**
   * Retrieve all staking positions for a specific user
   */
  list(userID: number, options?: RequestOptions): APIPromise<StakeListResponse> {
    return this._client.get(path`/users/${userID}/stakes`, options);
  }
}

export interface UserStake {
  /**
   * Unique stake identifier
   */
  id?: number;

  /**
   * Staked amount
   */
  amount?: number;

  /**
   * Whether rewards are auto-compounded
   */
  autoCompound?: boolean;

  /**
   * End timestamp
   */
  endDate?: string;

  /**
   * Lock period in days
   */
  lockPeriod?: number;

  /**
   * Start timestamp
   */
  startDate?: string;

  /**
   * Stake status
   */
  status?: 'active' | 'completed' | 'claimed';

  /**
   * Total rewards earned
   */
  totalRewards?: number;

  /**
   * User identifier
   */
  userId?: number;

  vault?: StakingAPI.StakingVault;

  /**
   * Vault identifier
   */
  vaultId?: number;
}

export type StakeListResponse = Array<UserStake>;

export interface StakeCreateParams {
  /**
   * Amount to stake
   */
  amount: number;

  /**
   * Vault identifier
   */
  vaultId: number;

  /**
   * Whether to auto-compound rewards
   */
  autoCompound?: boolean;

  /**
   * Lock period in days
   */
  lockPeriod?: number;
}

export declare namespace Stakes {
  export {
    type UserStake as UserStake,
    type StakeListResponse as StakeListResponse,
    type StakeCreateParams as StakeCreateParams,
  };
}
