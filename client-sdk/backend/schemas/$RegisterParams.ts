/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegisterParams = {
  properties: {
    first_name: {
      type: 'string',
      description: `First name of customer`,
      isRequired: true,
    },
    middle_name: {
      type: 'string',
      description: `Middle name of customer`,
    },
    last_name: {
      type: 'string',
      description: `Last name of customer`,
      isRequired: true,
    },
    email: {
      type: 'string',
      description: `Email of customer`,
      isRequired: true,
    },
    password: {
      type: 'string',
      description: `Password of customer`,
      isRequired: true,
    },
  },
} as const;
