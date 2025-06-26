// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Missions extends APIResource {
  /**
   * Retrieve detailed information about a specific mission
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Mission> {
    return this._client.get(path`/missions/${id}`, options);
  }

  /**
   * Retrieve the list of all available missions
   */
  list(
    query: MissionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MissionListResponse> {
    return this._client.get('/missions', { query, ...options });
  }
}

export interface Mission {
  /**
   * Unique mission identifier
   */
  id?: number;

  /**
   * Mission category
   */
  category?: string;

  /**
   * Detailed mission description
   */
  description?: string;

  /**
   * Mission end timestamp
   */
  endDate?: string;

  /**
   * Points rewarded for completing the mission
   */
  points?: number;

  /**
   * List of requirements to complete the mission
   */
  requirements?: Array<Mission.Requirement>;

  /**
   * Mission start timestamp
   */
  startDate?: string;

  /**
   * Current mission status
   */
  status?: 'active' | 'inactive' | 'completed';

  /**
   * Mission title
   */
  title?: string;

  /**
   * Token amount rewarded for completing the mission
   */
  tokenReward?: number;
}

export namespace Mission {
  export interface Requirement {
    /**
     * Unique requirement identifier
     */
    id?: number;

    /**
     * Requirement description
     */
    description?: string;

    /**
     * Target value to reach
     */
    target?: number;

    /**
     * Type of requirement
     */
    type?: 'transaction' | 'social' | 'quiz' | 'game' | 'other';

    /**
     * How the requirement is verified
     */
    verificationMethod?: 'automatic' | 'manual';
  }
}

export type MissionListResponse = Array<Mission>;

export interface MissionListParams {
  /**
   * Filter missions by category
   */
  category?: string;

  /**
   * Filter missions by status
   */
  status?: 'active' | 'inactive' | 'completed';
}

export declare namespace Missions {
  export {
    type Mission as Mission,
    type MissionListResponse as MissionListResponse,
    type MissionListParams as MissionListParams,
  };
}
