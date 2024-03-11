/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetMeResponse } from '../models/GetMeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomerService {
  /**
   * Get current customer
   * @returns GetMeResponse Get current customer success
   * @throws ApiError
   */
  public static getCustomer(): CancelablePromise<GetMeResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer',
    });
  }
}
