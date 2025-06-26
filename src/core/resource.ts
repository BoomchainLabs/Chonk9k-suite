// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { EarnApp } from '../client';

export abstract class APIResource {
  protected _client: EarnApp;

  constructor(client: EarnApp) {
    this._client = client;
  }
}
