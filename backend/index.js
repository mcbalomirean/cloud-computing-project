import express from "express";
import cors from "cors";

import { applicationPort } from "./config.js";
import { connection } from "./database";

const app = express();
app.use(cors());

const port = applicationPort ?? 3001;

app.get("/", async (req, res) => {
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM emails");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
