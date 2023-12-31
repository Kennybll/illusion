import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";
import { connectionOptions } from "./src/database";
export default (defineConfig({
	schema: "./src/database/schema.ts",
	driver: "mysql2",
	dbCredentials: {
		host: connectionOptions.host as string,
		port: connectionOptions.port as number,
		user: connectionOptions.user,
		password: connectionOptions.password,
		database: connectionOptions.database as string,
	},
	verbose: true,
	strict: true,
	out: "./src/database/drizzle",
}) satisfies Config);
