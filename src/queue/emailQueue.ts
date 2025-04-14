import { Queue } from "bullmq"
import redisConnection from "../redis/redisConnection"
import { EmailJob } from "../types/emailJob"

export default new Queue<EmailJob>("email-queue", { connection: redisConnection })