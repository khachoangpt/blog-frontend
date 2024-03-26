/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GetListBlogResponseBlog = {
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
      description: `Is published`,
    },
    published_at: {
      type: 'string',
      description: `Published at`,
      format: 'date-time',
    },
    created_at: {
      type: 'string',
      description: `Created at`,
      format: 'date-time',
    },
    updated_at: {
      type: 'string',
      description: `Updated at`,
      format: 'date-time',
    },
  },
} as const;
