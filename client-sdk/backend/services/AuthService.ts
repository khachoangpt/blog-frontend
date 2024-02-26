/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDTO } from '../models/LoginDTO';
import type { LoginParams } from '../models/LoginParams';
import type { RegisterDTO } from '../models/RegisterDTO';
import type { RegisterParams } from '../models/RegisterParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
  /**
   * Login
   * Login
   * @returns LoginDTO Login DTO
   * @throws ApiError
   */
  public static login({
    requestBody,
  }: {
    requestBody?: LoginParams,
  }): CancelablePromise<LoginDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/auth/login',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Register
   * Register
   * @returns RegisterDTO Register DTO
   * @throws ApiError
   */
  public static register({
    requestBody,
  }: {
    requestBody?: RegisterParams,
  }): CancelablePromise<RegisterDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/auth/register',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
