/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/auth/register/email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name: string | null;
                        password: string;
                        /** Format: email */
                        email: string;
                    };
                };
            };
            responses: {
                /** @description No content */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            name: string | null;
                            /** Format: email */
                            email: string;
                        };
                    };
                };
                /** @description Gives you errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                422: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/login/email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                        password: string;
                        /** Format: email */
                        email?: string;
                    };
                };
            };
            responses: {
                /** @description No content */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            name: string | null;
                            /** Format: email */
                            email: string;
                        };
                    };
                };
                /** @description Gives you errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                422: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description No content */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Gives you errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                422: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            name: string;
                            color?: string | null;
                            id: number;
                        }[];
                    };
                };
                /** @description Gives you errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                422: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name: string;
                        color?: string | null;
                    };
                };
            };
            responses: {
                /** @description Retrieve the user */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            name: string;
                            color?: string | null;
                            id: number;
                        };
                    };
                };
                /** @description Gives you errors */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                422: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
                /** @description Gives you errors */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /**
                             * @default usual
                             * @enum {string}
                             */
                            errorType: "field" | "usual";
                            fieldError?: {
                                [key: string]: string;
                            };
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
