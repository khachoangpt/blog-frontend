// This file is auto-generated by @hey-api/openapi-ts


export const $LoginResponse = {
    type: 'object',
    properties: {
        customer: {
            '$ref': '#/components/schemas/LoginResponseCustomer'
        },
        token: {
            type: 'string',
            description: 'Token of customer'
        }
    }
} as const;

export const $LoginResponseCustomer = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'Id of customer'
        },
        created_at: {
            type: 'string',
            format: 'date-time',
            description: 'Created at of customer'
        },
        updated_at: {
            type: 'string',
            format: 'date-time',
            description: 'Updated at of customer'
        },
        first_name: {
            type: 'string',
            description: 'First name of customer'
        },
        middle_name: {
            type: 'string',
            description: 'Middle name of customer'
        },
        last_name: {
            type: 'string',
            description: 'Last name of customer'
        },
        email: {
            type: 'string',
            description: 'Email of customer'
        },
        status: {
            '$ref': '#/components/schemas/CustomerStatus'
        }
    }
} as const;

export const $LoginParams = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string',
            description: 'Email of customer'
        },
        password: {
            type: 'string',
            description: 'Password of customer'
        }
    }
} as const;

export const $RegisterResponse = {
    type: 'object',
    properties: {
        customer: {
            '$ref': '#/components/schemas/RegisterResponseCustomer'
        },
        token: {
            type: 'string',
            description: 'JWT token'
        }
    }
} as const;

export const $RegisterResponseCustomer = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'customer id'
        },
        created_at: {
            type: 'string',
            format: 'date-time'
        },
        updated_at: {
            type: 'string',
            format: 'date-time'
        },
        first_name: {
            type: 'string'
        },
        middle_name: {
            type: 'string'
        },
        last_name: {
            type: 'string'
        },
        email: {
            type: 'string',
            format: 'email'
        },
        status: {
            '$ref': '#/components/schemas/CustomerStatus'
        }
    }
} as const;

export const $RegisterParams = {
    type: 'object',
    required: ['first_name', 'last_name', 'email', 'password'],
    properties: {
        first_name: {
            type: 'string',
            description: 'First name of customer'
        },
        middle_name: {
            type: 'string',
            description: 'Middle name of customer'
        },
        last_name: {
            type: 'string',
            description: 'Last name of customer'
        },
        email: {
            type: 'string',
            description: 'Email of customer'
        },
        password: {
            type: 'string',
            description: 'Password of customer'
        }
    }
} as const;

export const $GetBlogDetailResponse = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'Id of blog'
        },
        title: {
            type: 'string',
            description: 'Title of blog'
        },
        summary: {
            type: 'string',
            description: 'Summary of blog'
        },
        thumbnail: {
            type: 'string',
            description: 'Thumbnail of blog'
        },
        content: {
            type: 'string',
            description: 'Content of blog'
        },
        is_published: {
            type: 'boolean',
            description: 'Is published'
        },
        published_at: {
            type: 'string',
            description: 'Published at'
        },
        created_at: {
            type: 'string',
            description: 'Created at'
        },
        updated_at: {
            type: 'string',
            description: 'Updated at'
        }
    }
} as const;

export const $GetListBlogResponse = {
    type: 'object',
    properties: {
        blogs: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/GetListBlogResponseBlog'
            }
        },
        total: {
            type: 'number'
        }
    }
} as const;

export const $GetListBlogResponseBlog = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'Id of blog'
        },
        title: {
            type: 'string',
            description: 'Title of blog'
        },
        summary: {
            type: 'string',
            description: 'Summary of blog'
        },
        thumbnail: {
            type: 'string',
            description: 'Thumbnail of blog'
        },
        content: {
            type: 'string',
            description: 'Content of blog'
        },
        is_published: {
            type: 'boolean',
            description: 'Is published'
        },
        published_at: {
            type: 'string',
            format: 'date-time',
            description: 'Published at'
        },
        created_at: {
            type: 'string',
            format: 'date-time',
            description: 'Created at'
        },
        updated_at: {
            type: 'string',
            format: 'date-time',
            description: 'Updated at'
        }
    }
} as const;

export const $GetMeResponse = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'The id of the customer'
        },
        created_at: {
            type: 'string',
            format: 'date-time',
            description: 'The date time of customer creation'
        },
        updated_at: {
            type: 'string',
            format: 'date-time',
            description: 'The date time of customer update'
        },
        first_name: {
            type: 'string',
            description: 'The first name of customer'
        },
        middle_name: {
            type: 'string',
            description: 'The middle name of customer'
        },
        last_name: {
            type: 'string',
            description: 'The last name of customer'
        },
        email: {
            type: 'string',
            description: 'The email of customer'
        },
        status: {
            '$ref': '#/components/schemas/CustomerStatus',
            description: 'The status of the customer'
        }
    }
} as const;

export const $GetTagListResponse = {
    type: 'object',
    properties: {
        tags: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    },
                    created_at: {
                        type: 'string',
                        format: 'date-time'
                    },
                    updated_at: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            }
        },
        count: {
            type: 'integer'
        }
    }
} as const;

export const $CustomerStatus = {
    type: 'string',
    enum: ['active', 'banned', 'deleted']
} as const;

export const $CustomerRole = {
    type: 'string',
    enum: ['customer', 'admin']
} as const;

export const $ErrorMessages = {
    type: 'string',
    enum: ['Customer not found', 'Email or password incorrect']
} as const;

export const $NextJsOptions = {
    type: 'object',
    properties: {
        revalidate: {
            type: 'number',
            description: 'Revalidate time in seconds'
        },
        type: {
            type: 'string',
            description: 'Cache type',
            enum: ['default', 'force-cache', 'no-cache', 'no-store', 'only-if-cached', 'reload']
        },
        tags: {
            type: 'array',
            items: {
                type: 'string'
            },
            description: 'Cache tags'
        }
    }
} as const;