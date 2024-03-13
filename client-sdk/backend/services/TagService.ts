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
    select,
    skip,
    take,
    relations,
    order,
  }: {
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
