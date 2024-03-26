/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginParams } from '../models/LoginParams';
import type { LoginResponse } from '../models/LoginResponse';
import type { RegisterParams } from '../models/RegisterParams';
import type { RegisterResponse } from '../models/RegisterResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
  /**
   * Login
   * Login
   * @returns LoginResponse Login response
   * @throws ApiError
   */
  public static login({
    cache,
    requestBody,
  }: {
    /**
     * Next.js option
     */
    cache?: {
      revalidate?: number;
      type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
      tags?: Array<string>;
    },
    requestBody?: LoginParams,
  }): CancelablePromise<LoginResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/auth/login',
      path: {
        'cache': cache,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Register
   * Register
   * @returns RegisterResponse Register response
   * @throws ApiError
   */
  public static register({
    cache,
    requestBody,
  }: {
    /**
     * Next.js option
     */
    cache?: {
      revalidate?: number;
      type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
      tags?: Array<string>;
    },
    requestBody?: RegisterParams,
  }): CancelablePromise<RegisterResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/auth/register',
      path: {
        'cache': cache,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
