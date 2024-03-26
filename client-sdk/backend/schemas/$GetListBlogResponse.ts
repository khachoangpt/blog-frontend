/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GetListBlogResponse = {
  properties: {
    blogs: {
      type: 'array',
      contains: {
        type: 'GetListBlogResponseBlog',
      },
    },
    total: {
      type: 'number',
    },
  },
} as const;
