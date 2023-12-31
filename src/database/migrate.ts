import { connectionOptions } from "@/database";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";
const singleConnection = await mysql.createConnection(connectionOptions);
const db = drizzle(singleConnection);
await migrate(db, { migrationsFolder: "src/database/drizzle" });
await singleConnection.end();
