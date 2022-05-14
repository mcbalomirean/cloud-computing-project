import { applicationPort } from "./config.js";
import express from "express";
import cors from "cors";

import { emailsRouter } from "./routes";

const app = express();
app.use(cors());

app.use("/emails", emailsRouter);

const port = applicationPort ?? 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
