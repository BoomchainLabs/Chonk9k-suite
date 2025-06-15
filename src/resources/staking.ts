// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Staking extends APIResource {
  /**
   * Retrieve all available staking vaults
   */
  listVaults(options?: RequestOptions): APIPromise<StakingListVaultsResponse> {
    return this._client.get('/staking/vaults', options);
  }
}

export interface StakingVault {
  /**
   * Unique vault identifier
   */
  id?: number;

  /**
   * Whether the vault is active
   */
  active?: boolean;

  /**
   * Annual percentage rate
   */
  apr?: number;

  /**
   * Vault description
   */
  description?: string;

  /**
   * Minimum lock period in days
   */
  minLockPeriod?: number;

  /**
   * Vault name
   */
  name?: string;

  /**
   * Rewards offered by this vault
   */
  rewards?: Array<StakingVault.Reward>;

  /**
   * Total amount staked in this vault
   */
  totalStaked?: number;
}

export namespace StakingVault {
  export interface Reward {
    /**
     * Unique reward identifier
     */
    id?: number;

    /**
     * Reward description
     */
    description?: string;

    /**
     * When the reward is distributed
     */
    distribution?: 'daily' | 'weekly' | 'monthly' | 'end';

    /**
     * Reward rate
     */
    rate?: number;

    /**
     * Type of reward
     */
    type?: 'token' | 'nft' | 'boost' | 'other';
  }
}

export type StakingListVaultsResponse = Array<StakingVault>;

export declare namespace Staking {
  export { type StakingVault as StakingVault, type StakingListVaultsResponse as StakingListVaultsResponse };
}
