/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from './Tag';
export type Blog = {
  /**
   * Id of blog
   */
  id?: string;
  /**
   * Title of blog
   */
  title?: string;
  /**
   * Summary of blog
   */
  summary?: string;
  /**
   * Thumbnail of blog
   */
  thumbnail?: string;
  /**
   * Content of blog
   */
  content?: string;
  tags?: Array<Tag>;
  /**
   * Check blog is public or not
   */
  is_published?: string;
  /**
   * Published at of blog
   */
  published_at?: string;
  /**
   * Created at
   */
  created_at?: string;
  /**
   * Updated at
   */
  updated_at?: string;
};

