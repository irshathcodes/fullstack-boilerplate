import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connection, db } from "./index.js";
import config from "../../drizzle.config.js";

if (!process.env.DB_MIGRATING) {
  throw new Error(
    'You must set DB_MIGRATING to "true" when running migrations'
  );
}

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: config.out! });

await connection.end();
