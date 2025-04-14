import { Redis } from "ioredis"
import { config } from "dotenv"

config()

export default new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASS,
    maxRetriesPerRequest: null
})