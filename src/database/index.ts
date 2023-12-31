import { drizzle } from "drizzle-orm/mysql2";
import mysql, { ConnectionOptions } from "mysql2/promise";

export const connectionOptions: ConnectionOptions = {
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
};

export const poolConnection = mysql.createPool(connectionOptions);

export const db = drizzle(poolConnection);

export default db;
