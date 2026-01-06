import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { config } from "dotenv";

config({ path: ".env.local" });

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "src/db/migrations" });
    console.log("Migrations completed");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
};

main();
