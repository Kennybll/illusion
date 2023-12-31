import app from "@/server/app";

const port = process.env.BACKEND_PORT || 3001;

Bun.serve({
    fetch: app.fetch,
    port,
})