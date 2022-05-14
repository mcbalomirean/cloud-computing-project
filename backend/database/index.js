import mysql from "mysql2/promise";
import { databaseConfig } from "../config.js";

export const connection = await mysql.createConnection(databaseConfig);

// connection.connect((err) => {
//   if (!err) {
//     console.log("Connected to database.");
//     return;
//   }

//   throw err;
// });
