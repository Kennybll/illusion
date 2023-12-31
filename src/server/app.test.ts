import { describe, expect, it } from "bun:test";
import app from "@/server/app";

describe("hono server", () => {
	it("should return 200", async () => {
		const res = await app.request("/health");
		expect(res.status).toBe(200);
	});
});
