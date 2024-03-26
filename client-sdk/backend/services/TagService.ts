/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetTagListResponse } from '../models/GetTagListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagService {
  /**
   * Get tag list
   * Get tag list
   * @returns GetTagListResponse An array of tags
   * @throws ApiError
   */
  public static getTags({
    next,
    cache,
    select,
    skip,
    take,
    relations,
    order,
  }: {
    /**
     * Next.js option
     */
    next?: {
      revalidate?: number;
      tags?: Array<string>;
    },
    /**
     * Next.js option
     */
    cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload',
    /**
     * Select
     */
    select?: string,
    /**
     * Skip
     */
    skip?: number,
    /**
     * Take
     */
    take?: number,
    /**
     * Relations
     */
    relations?: Array<string>,
    /**
     * Order
     */
    order?: Array<string>,
  }): CancelablePromise<GetTagListResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/tag',
      path: {
        'next': next,
        'cache': cache,
      },
      query: {
        'select': select,
        'skip': skip,
        'take': take,
        'relations': relations,
        'order': order,
      },
    });
  }
}
