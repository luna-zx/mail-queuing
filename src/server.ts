import express from "express"
import z from "zod"
import { config } from "dotenv"
import { addEmailJob } from "./job/emailJob"

const app = express()
config()

app.use(express.json())

app.post("/send-email", async (req, res) => {
    try {
        const bodySchema = z.object({
            to: z.string().email(),
            subject: z.string(),
            html: z.string()
        })
        const validateResult = bodySchema.safeParse(req.body)
        if (!validateResult.success) {
            res.status(400).json(validateResult.error)
            return
        }

        const { to, subject, html } = validateResult.data
        await addEmailJob({ to, subject, html })

        res.status(200).json({ message: "Email sended!" })
        return
    } catch (error) {
        console.error(error)
    }
})

app.listen(Number(process.env.API_PORT), () => {
    console.log("Server started!")
})