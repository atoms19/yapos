import "dotenv"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

export async function createDB() {
	let pgPool =  new Pool({
		connectionString: process.env.DATABASE_URL!
	})

	return drizzle(pgPool);
}
