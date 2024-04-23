// This file is auto-generated by @hey-api/openapi-ts

export enum CustomerStatusEnum {
    ACTIVE = 'active',
    BANNED = 'banned',
    DELETED = 'deleted'
}

export enum CustomerRoleEnum {
    CUSTOMER = 'customer',
    ADMIN = 'admin'
}

export enum ErrorMessagesEnum {
    CUSTOMER_NOT_FOUND = 'Customer not found',
    EMAIL_OR_PASSWORD_INCORRECT = 'Email or password incorrect'
}

/**
 * Cache type
 */
export enum CacheTypeEnum {
    DEFAULT = 'default',
    FORCE_CACHE = 'force-cache',
    NO_CACHE = 'no-cache',
    NO_STORE = 'no-store',
    ONLY_IF_CACHED = 'only-if-cached',
    RELOAD = 'reload'
}