/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerStatus } from './CustomerStatus';
export type RegisterResponseCustomer = {
  /**
   * customer id
   */
  id?: string;
  created_at?: string;
  updated_at?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  email?: string;
  status?: CustomerStatus;
};

