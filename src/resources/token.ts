// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Token extends APIResource {
  /**
   * Retrieve current information about the $LERF token
   */
  retrieveInfo(options?: RequestOptions): APIPromise<TokenRetrieveInfoResponse> {
    return this._client.get('/token/info', options);
  }
}

export interface TokenRetrieveInfoResponse {
  /**
   * Token contract address
   */
  address?: string;

  /**
   * Circulating token supply
   */
  circulatingSupply?: number;

  /**
   * Token decimals
   */
  decimals?: number;

  /**
   * Exchanges where the token is listed
   */
  listings?: Array<TokenRetrieveInfoResponse.Listing>;

  /**
   * Current market capitalization
   */
  marketCap?: number;

  /**
   * Token name
   */
  name?: string;

  /**
   * Current token price in USD
   */
  price?: number;

  /**
   * 24-hour price change percentage
   */
  priceChange24h?: number;

  /**
   * Token symbol
   */
  symbol?: string;

  /**
   * Total token supply
   */
  totalSupply?: number;

  /**
   * 24-hour trading volume
   */
  volume24h?: number;
}

export namespace TokenRetrieveInfoResponse {
  export interface Listing {
    /**
     * Exchange name
     */
    exchange?: string;

    /**
     * Trading pair
     */
    pair?: string;

    /**
     * Link to exchange
     */
    url?: string;
  }
}

export declare namespace Token {
  export { type TokenRetrieveInfoResponse as TokenRetrieveInfoResponse };
}
