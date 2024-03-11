/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerStatus } from './CustomerStatus';
export type LoginResponse = {
  customer?: {
    /**
     * Id of customer
     */
    id?: string;
    /**
     * Created at of customer
     */
    created_at?: string;
    /**
     * Updated at of customer
     */
    updated_at?: string;
    /**
     * First name of customer
     */
    first_name?: string;
    /**
     * Middle name of customer
     */
    middle_name?: string;
    /**
     * Last name of customer
     */
    last_name?: string;
    /**
     * Email of customer
     */
    email?: string;
    status?: CustomerStatus;
  };
  /**
   * Token of customer
   */
  token?: string;
};

