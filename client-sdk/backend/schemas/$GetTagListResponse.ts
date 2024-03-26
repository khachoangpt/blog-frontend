/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GetTagListResponse = {
  properties: {
    tags: {
      type: 'array',
      contains: {
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
    },
    count: {
      type: 'number',
    },
  },
} as const;
