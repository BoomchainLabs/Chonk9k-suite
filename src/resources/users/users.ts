// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import * as MissionsAPI from '../missions';
import * as StakesAPI from './stakes';
import { StakeCreateParams, StakeListResponse, Stakes, UserStake } from './stakes';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  stakes: StakesAPI.Stakes = new StakesAPI.Stakes(this._client);

  /**
   * Register a new user in the system with their wallet address
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Retrieve all missions for a specific user
   */
  listMissions(userID: number, options?: RequestOptions): APIPromise<UserListMissionsResponse> {
    return this._client.get(path`/users/${userID}/missions`, options);
  }

  /**
   * Retrieve all referrals made by a specific user
   */
  listReferrals(userID: number, options?: RequestOptions): APIPromise<UserListReferralsResponse> {
    return this._client.get(path`/users/${userID}/referrals`, options);
  }

  /**
   * Retrieve user details by their blockchain wallet address
   */
  retrieveByWallet(address: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/users/wallet/${address}`, options);
  }
}

export interface User {
  /**
   * Unique user identifier
   */
  id?: number;

  /**
   * User creation timestamp
   */
  createdAt?: string;

  /**
   * User's email address
   */
  email?: string;

  /**
   * User's current level
   */
  level?: number;

  /**
   * User's unique referral code
   */
  referralCode?: string;

  /**
   * Total points earned by the user
   */
  totalPoints?: number;

  /**
   * Last update timestamp
   */
  updatedAt?: string;

  /**
   * User's chosen username
   */
  username?: string;

  /**
   * User's blockchain wallet address
   */
  walletAddress?: string;
}

export type UserListMissionsResponse = Array<UserListMissionsResponse.UserListMissionsResponseItem>;

export namespace UserListMissionsResponse {
  export interface UserListMissionsResponseItem {
    /**
     * Unique progress identifier
     */
    id?: number;

    /**
     * Whether the reward has been claimed
     */
    claimed?: boolean;

    /**
     * Reward claim timestamp
     */
    claimedAt?: string;

    /**
     * Whether the mission is completed
     */
    completed?: boolean;

    /**
     * Completion timestamp
     */
    completedAt?: string;

    mission?: MissionsAPI.Mission;

    /**
     * Mission identifier
     */
    missionId?: number;

    /**
     * Current progress percentage (0-100)
     */
    progress?: number;

    /**
     * User identifier
     */
    userId?: number;
  }
}

export type UserListReferralsResponse = Array<UserListReferralsResponse.UserListReferralsResponseItem>;

export namespace UserListReferralsResponse {
  export interface UserListReferralsResponseItem {
    /**
     * Unique referral identifier
     */
    id?: number;

    /**
     * Referral code used
     */
    code?: string;

    /**
     * Referral creation timestamp
     */
    createdAt?: string;

    referee?: UsersAPI.User;

    /**
     * Referred user identifier
     */
    refereeId?: number;

    /**
     * Referrer user identifier
     */
    referrerId?: number;

    /**
     * Reward amount given to referrer
     */
    rewardAmount?: number;

    /**
     * Reward timestamp
     */
    rewardedAt?: string;

    /**
     * Referral status
     */
    status?: 'pending' | 'rewarded' | 'expired';
  }
}

export interface UserCreateParams {
  /**
   * User's blockchain wallet address
   */
  walletAddress: string;

  /**
   * User's email address
   */
  email?: string;

  /**
   * Referral code used during signup
   */
  referralCode?: string;

  /**
   * User's chosen username
   */
  username?: string;
}

Users.Stakes = Stakes;

export declare namespace Users {
  export {
    type User as User,
    type UserListMissionsResponse as UserListMissionsResponse,
    type UserListReferralsResponse as UserListReferralsResponse,
    type UserCreateParams as UserCreateParams,
  };

  export {
    Stakes as Stakes,
    type UserStake as UserStake,
    type StakeListResponse as StakeListResponse,
    type StakeCreateParams as StakeCreateParams,
  };
}
