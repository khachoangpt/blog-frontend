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
    created_at: {
      type: 'string',
      description: `Created at`,
    },
    updated_at: {
      type: 'string',
      description: `Updated at`,
    },
    blogs: {
      type: 'array',
      contains: {
        type: 'Blog',
      },
    },
  },
} as const;
