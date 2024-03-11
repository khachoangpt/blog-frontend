/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegisterResponse = {
  properties: {
    id: {
      type: 'string',
      description: `Id of customer`,
    },
    created_at: {
      type: 'string',
      description: `Date of customer created`,
    },
    updated_at: {
      type: 'string',
      description: `Date of customer updated`,
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
} as const;
