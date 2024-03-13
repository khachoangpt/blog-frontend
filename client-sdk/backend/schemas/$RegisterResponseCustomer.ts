/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegisterResponseCustomer = {
  properties: {
    id: {
      type: 'string',
      description: `customer id`,
    },
    created_at: {
      type: 'string',
      format: 'date-time',
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
    },
    first_name: {
      type: 'string',
    },
    middle_name: {
      type: 'string',
    },
    last_name: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    status: {
      type: 'CustomerStatus',
    },
  },
} as const;
