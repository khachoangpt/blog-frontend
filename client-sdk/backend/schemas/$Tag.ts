/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Tag = {
  properties: {
    id: {
      type: 'string',
      description: `Id of tag`,
    },
    name: {
      type: 'string',
      description: `Name of tag`,
    },
    blogs: {
      type: 'array',
      contains: {
        type: 'Blog',
      },
    },
  },
} as const
