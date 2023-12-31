import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();

app.use("*", cors());
app.use("*", prettyJSON());

app.get("/health", (c) => {
	return c.json({ status: "ok" });
});

export type AppType = typeof app;

export default app;
