import { Router } from "express";
import { emailsController } from "../database";

export const emailsRouter = Router();

emailsRouter.get("/", async (req, res) => {
  try {
    const [rows, fields] = await emailsController.getAllEmails();
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});
