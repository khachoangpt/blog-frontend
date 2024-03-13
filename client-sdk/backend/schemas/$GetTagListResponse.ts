/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GetTagListResponse = {
  properties: {
    tags: {
      type: 'array',
      contains: {
        type: 'GetTagListResponseTag',
      },
    },
    count: {
      type: 'number',
      description: `Total tags`,
      format: 'int32',
    },
  },
} as const;
