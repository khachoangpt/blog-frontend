/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GetMeResponse = {
  properties: {
    id: {
      type: 'string',
      description: `The id of the customer`,
    },
    created_at: {
      type: 'string',
      description: `The date time of customer creation`,
      format: 'date-time',
    },
    updated_at: {
      type: 'string',
      description: `The date time of customer update`,
      format: 'date-time',
    },
    first_name: {
      type: 'string',
      description: `The first name of customer`,
    },
    middle_name: {
      type: 'string',
      description: `The middle name of customer`,
    },
    last_name: {
      type: 'string',
      description: `The last name of customer`,
    },
    email: {
      type: 'string',
      description: `The email of customer`,
    },
    status: {
      type: 'CustomerStatus',
      description: `The status of the customer`,
    },
  },
} as const;
