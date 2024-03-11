/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerStatus } from './CustomerStatus';
export type GetMeResponse = {
  /**
   * The id of the customer
   */
  id?: string;
  /**
   * The date time of customer creation
   */
  created_at?: string;
  /**
   * The date time of customer update
   */
  updated_at?: string;
  /**
   * The first name of customer
   */
  first_name?: string;
  /**
   * The middle name of customer
   */
  middle_name?: string;
  /**
   * The last name of customer
   */
  last_name?: string;
  /**
   * The email of customer
   */
  email?: string;
  /**
   * The status of the customer
   */
  status?: CustomerStatus;
};

