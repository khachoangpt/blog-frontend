// This file is auto-generated by @hey-api/openapi-ts


export type LoginResponse = {
    customer?: LoginResponseCustomer;
    /**
 * Token of customer
 */
    token?: string;
};

export type LoginResponseCustomer = {
    /**
 * Id of customer
 */
    id?: string;
    /**
 * Created at of customer
 */
    created_at?: string;
    /**
 * Updated at of customer
 */
    updated_at?: string;
    /**
 * First name of customer
 */
    first_name?: string;
    /**
 * Middle name of customer
 */
    middle_name?: string;
    /**
 * Last name of customer
 */
    last_name?: string;
    /**
 * Email of customer
 */
    email?: string;
    status?: CustomerStatus;
};

export type LoginParams = {
    /**
 * Email of customer
 */
    email: string;
    /**
 * Password of customer
 */
    password: string;
};

export type RegisterResponse = {
    customer?: RegisterResponseCustomer;
    /**
 * JWT token
 */
    token?: string;
};

export type RegisterResponseCustomer = {
    /**
 * customer id
 */
    id?: string;
    created_at?: string;
    updated_at?: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    email?: string;
    status?: CustomerStatus;
};

export type RegisterParams = {
    /**
 * First name of customer
 */
    first_name: string;
    /**
 * Middle name of customer
 */
    middle_name?: string;
    /**
 * Last name of customer
 */
    last_name: string;
    /**
 * Email of customer
 */
    email: string;
    /**
 * Password of customer
 */
    password: string;
};

export type GetBlogDetailResponse = {
    /**
 * Id of blog
 */
    id?: string;
    /**
 * Title of blog
 */
    title?: string;
    /**
 * Summary of blog
 */
    summary?: string;
    /**
 * Thumbnail of blog
 */
    thumbnail?: string;
    /**
 * Content of blog
 */
    content?: string;
    /**
 * Is published
 */
    is_published?: boolean;
    /**
 * Published at
 */
    published_at?: string;
    /**
 * Created at
 */
    created_at?: string;
    /**
 * Updated at
 */
    updated_at?: string;
};

export type GetListBlogResponse = {
    blogs?: Array<GetListBlogResponseBlog>;
    total?: number;
};

export type GetListBlogResponseBlog = {
    /**
 * Id of blog
 */
    id?: string;
    /**
 * Title of blog
 */
    title?: string;
    /**
 * Summary of blog
 */
    summary?: string;
    /**
 * Thumbnail of blog
 */
    thumbnail?: string;
    /**
 * Content of blog
 */
    content?: string;
    /**
 * Is published
 */
    is_published?: boolean;
    /**
 * Published at
 */
    published_at?: string;
    /**
 * Created at
 */
    created_at?: string;
    /**
 * Updated at
 */
    updated_at?: string;
};

export type GetMeResponse = {
    /**
 * The id of the customer
 */
    id?: string;
    /**
 * The date time of customer creation
 */
    created_at?: string;
    /**
 * The date time of customer update
 */
    updated_at?: string;
    /**
 * The first name of customer
 */
    first_name?: string;
    /**
 * The middle name of customer
 */
    middle_name?: string;
    /**
 * The last name of customer
 */
    last_name?: string;
    /**
 * The email of customer
 */
    email?: string;
    /**
 * The status of the customer
 */
    status?: CustomerStatus;
};

export type GetTagListResponse = {
    tags?: Array<{
        id?: string;
        name?: string;
        created_at?: string;
        updated_at?: string;
    }>;
    count?: number;
};

export type CustomerStatus = 'active' | 'banned' | 'deleted';

export type CustomerRole = 'customer' | 'admin';

export type ErrorMessages = 'Customer not found' | 'Email or password incorrect';

export type $OpenApiTs = {
    '/customer/auth/login': {
        post: {
            req: {
                /**
 * Next.js option
 */
                cache?: {
                    revalidate?: number;
                    type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
                    tags?: Array<(string)>;
                };
                requestBody?: LoginParams;
            };
            res: {
                /**
 * Login response
 */
                201: LoginResponse;
            };
        };
    };
    '/customer/auth/register': {
        post: {
            req: {
                /**
 * Next.js option
 */
                cache?: {
                    revalidate?: number;
                    type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
                    tags?: Array<(string)>;
                };
                requestBody?: RegisterParams;
            };
            res: {
                /**
 * Register response
 */
                201: RegisterResponse;
            };
        };
    };
    '/customer/blog/{id}': {
        get: {
            req: {
                /**
 * Next.js option
 */
                cache?: {
                    revalidate?: number;
                    type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
                    tags?: Array<(string)>;
                };
                /**
 * Id of blog
 */
                id: string;
            };
            res: {
                /**
 * A blog
 */
                200: GetBlogDetailResponse;
            };
        };
    };
    '/customer/blog': {
        get: {
            req: {
                /**
 * Next.js option
 */
                cache?: {
                    revalidate?: number;
                    type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
                    tags?: Array<(string)>;
                };
                /**
 * Order
 */
                order?: Array<(string)>;
                /**
 * Relations
 */
                relations?: Array<(string)>;
                /**
 * Select
 */
                select?: string;
                /**
 * Skip
 */
                skip?: number;
                /**
 * Take
 */
                take?: number;
            };
            res: {
                /**
 * An array of blogs
 */
                200: GetListBlogResponse;
            };
        };
    };
    '/customer/me': {
        get: {
            req: {
                /**
 * Next.js option
 */
                cache?: {
                    revalidate?: number;
                    type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
                    tags?: Array<(string)>;
                };
            };
            res: {
                /**
 * Get current customer success
 */
                200: GetMeResponse;
            };
        };
    };
    '/customer/tag': {
        get: {
            req: {
                /**
 * Next.js option
 */
                cache?: {
                    revalidate?: number;
                    type?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
                    tags?: Array<(string)>;
                };
                /**
 * Order
 */
                order?: Array<(string)>;
                /**
 * Relations
 */
                relations?: Array<(string)>;
                /**
 * Select
 */
                select?: string;
                /**
 * Skip
 */
                skip?: number;
                /**
 * Take
 */
                take?: number;
            };
            res: {
                /**
 * An array of tags
 */
                200: GetTagListResponse;
            };
        };
    };
};