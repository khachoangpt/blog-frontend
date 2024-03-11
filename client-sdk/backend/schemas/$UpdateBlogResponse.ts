/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateBlogResponse = {
  properties: {
    id: {
      type: 'string',
      description: `Id of blog`,
    },
    title: {
      type: 'string',
      description: `Title of blog`,
    },
    summary: {
      type: 'string',
      description: `Summary of blog`,
    },
    thumbnail: {
      type: 'string',
      description: `Thumbnail of blog`,
    },
    content: {
      type: 'string',
      description: `Content of blog`,
    },
    is_published: {
      type: 'boolean',
      description: `True if blog is published`,
    },
    published_at: {
      type: 'string',
      description: `Date when blog is published`,
      format: 'date-time',
    },
    created_at: {
      type: 'string',
      description: `Date when blog is created`,
      format: 'date-time',
    },
    updated_at: {
      type: 'string',
      description: `Date when blog is updated`,
      format: 'date-time',
    },
    deleted_at: {
      type: 'string',
      description: `Date when blog is deleted`,
      format: 'date-time',
    },
  },
} as const;
