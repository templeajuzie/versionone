import { config } from "dotenv";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
