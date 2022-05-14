import mysql from "mysql2/promise";
import { databaseConfig } from "../config.js";

export const connection = await mysql.createConnection(databaseConfig);
export { emailsController } from "./emails.js";
