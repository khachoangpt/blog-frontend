/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTagParams } from '../models/CreateTagParams';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagService {
  /**
   * Create a tag
   * Create a tag
   * @returns Tag A tag
   * @throws ApiError
   */
  public static createTag({
    requestBody,
  }: {
    requestBody?: CreateTagParams,
  }): CancelablePromise<Tag> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/tag',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tag list
   * Get tag list
   * @returns any An array of tags
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
  }): CancelablePromise<{
    /**
     * An array of tags
     */
    tags?: Array<Tag>;
    /**
     * Total tags
     */
    count?: number;
  }> {
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
