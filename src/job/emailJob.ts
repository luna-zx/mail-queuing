import emailQueue from "../queue/emailQueue"
import { EmailJob } from "../types/emailJob"

export const addEmailJob = async ({ to, subject, html }: EmailJob) => {
    await emailQueue.add("send-email", { to, subject, html }, {
        attempts: 3, // maximum retry : 3 (if the job fails)
        backoff: {
            type: 'exponential', // Retry strategy: exponential
            delay: 5000 // Delay (milliseconds) before retrying
        },
        removeOnComplete: true, // Remove job from Redis when it completes
    })
}