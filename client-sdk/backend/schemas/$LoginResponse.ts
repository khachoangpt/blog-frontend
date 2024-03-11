/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoginResponse = {
  properties: {
    customer: {
      properties: {
        id: {
          type: 'string',
          description: `Id of customer`,
        },
        created_at: {
          type: 'string',
          description: `Created at of customer`,
          format: 'date-time',
        },
        updated_at: {
          type: 'string',
          description: `Updated at of customer`,
          format: 'date-time',
        },
        first_name: {
          type: 'string',
          description: `First name of customer`,
        },
        middle_name: {
          type: 'string',
          description: `Middle name of customer`,
        },
        last_name: {
          type: 'string',
          description: `Last name of customer`,
        },
        email: {
          type: 'string',
          description: `Email of customer`,
        },
        status: {
          type: 'CustomerStatus',
        },
      },
    },
    token: {
      type: 'string',
      description: `Token of customer`,
    },
  },
} as const;
