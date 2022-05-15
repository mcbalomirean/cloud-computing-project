import mysql from "mysql2/promise";
import { databaseConfig } from "../config/config.js";

export const connection = await mysql.createConnection(databaseConfig);

export const executeQuery = async (query, args) => {
  try {
    const [rows, fields] = await connection.execute(query, args);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { notesController } from "./notes.js";
export { imagesController } from "./images.js";
