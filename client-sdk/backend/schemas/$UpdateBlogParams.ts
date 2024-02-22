/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateBlogParams = {
  properties: {
    id: {
      type: 'string',
      description: `Id of blog`,
      isRequired: true,
    },
    title: {
      type: 'string',
      description: `Title of blog`,
      isRequired: true,
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
  },
} as const
