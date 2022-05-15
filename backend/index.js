import { applicationPort } from "./config/";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { notesRouter, imagesRouter } from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/notes", notesRouter);
app.use("/images", imagesRouter);

const port = applicationPort ?? 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
