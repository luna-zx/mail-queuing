module.exports = {
    apps: [
        {
            name: "api",
            script: "dist/server.js",
        },
        {
            name: "worker",
            script: "dist/worker/emailWorker.js",
            instance: 2,
            exec_mode: "cluster"
        },
    ]
}