// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stats extends APIResource {
  /**
   * Retrieve overall platform statistics and metrics
   */
  retrieve(options?: RequestOptions): APIPromise<StatRetrieveResponse> {
    return this._client.get('/stats', options);
  }
}

export interface StatRetrieveResponse {
  /**
   * Number of active missions
   */
  activeMissions?: number;

  /**
   * Number of active quests
   */
  activeQuests?: number;

  /**
   * Daily active users
   */
  dailyActiveUsers?: number;

  /**
   * Monthly active users
   */
  monthlyActiveUsers?: number;

  /**
   * Total amount staked across all vaults
   */
  totalStaked?: number;

  /**
   * Total tokens distributed as rewards
   */
  totalTokensDistributed?: number;

  /**
   * Total number of users
   */
  totalUsers?: number;

  /**
   * Weekly active users
   */
  weeklyActiveUsers?: number;
}

export declare namespace Stats {
  export { type StatRetrieveResponse as StatRetrieveResponse };
}
