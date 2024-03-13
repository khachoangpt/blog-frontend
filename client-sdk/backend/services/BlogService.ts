/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetBlogDetailResponse } from '../models/GetBlogDetailResponse';
import type { GetListBlogResponse } from '../models/GetListBlogResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogService {
  /**
   * Get blog detail
   * Get blog detail
   * @returns GetBlogDetailResponse A blog
   * @throws ApiError
   */
  public static getBlogDetail({
    id,
  }: {
    /**
     * Id of blog
     */
    id: string,
  }): CancelablePromise<GetBlogDetailResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/blog/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Get blog list
   * Get blog list
   * @returns GetListBlogResponse An array of blogs
   * @throws ApiError
   */
  public static getBlogs({
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
  }): CancelablePromise<GetListBlogResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/blog',
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
