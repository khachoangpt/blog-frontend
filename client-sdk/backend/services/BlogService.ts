/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Blog } from '../models/Blog';
import type { CreateBlogParams } from '../models/CreateBlogParams';
import type { UpdateBlogParams } from '../models/UpdateBlogParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogService {
  /**
   * Create a blog
   * Create a blog
   * @returns Blog A blog
   * @throws ApiError
   */
  public static createBlog({
    requestBody,
  }: {
    requestBody?: CreateBlogParams,
  }): CancelablePromise<Blog> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/blog',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get blog list
   * Get blog list
   * @returns Blog An array of blogs
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
  }): CancelablePromise<Array<Blog>> {
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
  /**
   * Update a blog
   * Update a blog
   * @returns Blog A blog
   * @throws ApiError
   */
  public static updateBlog({
    requestBody,
  }: {
    requestBody?: UpdateBlogParams,
  }): CancelablePromise<Blog> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/customer/blog',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
