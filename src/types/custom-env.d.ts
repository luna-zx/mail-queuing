declare namespace NodeJS {
    interface ProcessEnv {
        SMTP_HOST: string
        SMTP_PORT: string
        SMTP_USER: string
        SMTP_PASS: string

        REDIS_HOST: string
        REDIS_PORT: string
        REDIS_USER: string
        REDIS_PASS: string

        API_PORT: string
    }
}