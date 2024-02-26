/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerStatus } from './CustomerStatus';
export type RegisterDTO = {
  /**
   * Id of customer
   */
  id?: string;
  /**
   * Date of customer created
   */
  created_at?: string;
  /**
   * Date of customer updated
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

