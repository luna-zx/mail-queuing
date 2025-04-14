# 📬 Express Email Queue with BullMQ, Nodemailer & Redis

[![PM2](https://img.shields.io/badge/PM2-black.svg)](https://pm2.keymetrics.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![BullMQ](https://img.shields.io/badge/BullMQ-Queue-red.svg)](https://docs.bullmq.io/)
[![Redis](https://img.shields.io/badge/Redis-red.svg)](https://redis.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)](https://www.typescriptlang.org/)

---

## ⚙️ Tech Stack

- **Express.js** – API
- **BullMQ** – Queue system
- **Nodemailer** – Email sending
- **Redis** – Queue storage
- **PM2** – Process manager for worker/API
- **TypeScript** – Type-safety

---

## 🚀 Features

- ✅ Queue email jobs asynchronously
- 🛡 Type-safe job structure with TypeScript
- 📬 Nodemailer integration
- 🔧 Easily scalable with PM2

---

## 📦 Installation

```bash
git clone https://github.com/luna-zx/mail-queuing.git
cd mail-queuing
npm i
```

## 🧪 Set Environment Variables

```env
SMTP_HOST = # your SMTP HOST 
SMTP_PORT = # your SMTP PORT
SMTP_USER = # your SMTP USER
SMTP_PASS = # your SMTP PASSWORD

REDIS_HOST = # your REDIS HOST
REDIS_PORT = # your REDIS PORT
REDIS_USER = # your REDIS user
REDIS_PASS =  # your REDIS pass

API_PORT = # your api port
```

## ▶️ Start Services

PM2 : 

```bash
npm run build
npx pm2 start pm2.config.js
```

Terminals :

```bash
# Terminal 1
node dist/server.js 
# or
npx ts-node src/server.ts

# Terminal 2
node dist/worker/emailWorker.js
# or
npx ts-node src/worker/emailWorker.ts
```

## 📨 Send a Test Email

```bash
curl -X POST http://localhost:yourport/send-email \
-H "Content-Type: application/json" \
-d '{ "to": "test@gmail.com", "subject": "Hello from sigma boy", "html": "<p>Test</p>" }'
```

Or : 

```javascript
axios.post("http://localhost:yourport/send-email", {
    to: "test@gmail.com",
    subject: "Hello from sigma boy",
    html: "<p>Test</p>"
})
```

## ✨ Suggestion

Recommended to verify your Redis Database is configured with the `noeviction` policy.

Why? :

If Redis `runs out of memory` and `eviction` is turned on (like `volatile-lru` or `allkeys-lru`), it might start delete keys. This can cause your queued jobs to disappear without warning.