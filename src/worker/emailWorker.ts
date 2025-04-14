import { Worker } from "bullmq"
import transporter from "../email/transporter"
import redisConnection from "../redis/redisConnection"
import { EmailJob } from "../types/emailJob"

const worker = new Worker<EmailJob>("email-queue", async job => {
    if (job.name === "send-email") {
        const { to, subject, html } = job.data
        await transporter.sendMail({
            to,
            from: "sigma boy",
            subject,
            html
        })
        console.log("Email sended!")
    }
}, { connection: redisConnection })

worker.on("completed", job => {
    console.log(`${job.name} completed!`)
})

worker.on("failed", (job, error) => {
    console.log(`${job?.name} failed!`)
    console.error(error)
})