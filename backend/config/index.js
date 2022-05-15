import dotenv from "dotenv";
dotenv.config();

import fs from "fs/promises";
await fs.writeFile(
  "./config/credentials.json",
  process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
);

export const applicationPort = process.env.PORT;

export const databaseConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};
