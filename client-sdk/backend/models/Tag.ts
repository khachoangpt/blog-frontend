/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Blog } from './Blog';
export type Tag = {
  /**
   * Id of tag
   */
  id?: string;
  /**
   * Name of tag
   */
  name?: string;
  /**
   * Created at
   */
  created_at?: string;
  /**
   * Updated at
   */
  updated_at?: string;
  blogs?: Array<Blog>;
};

