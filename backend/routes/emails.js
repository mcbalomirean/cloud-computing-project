import { Router } from "express";
import { emailsController } from "../database";

export const emailsRouter = Router();

emailsRouter.get("/", async (req, res) => {
  try {
    const results = await emailsController.getAllEmails();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

emailsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const results = await emailsController.getEmailById(id);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

emailsRouter.post("/", async (req, res) => {
  const { receiver, subject, content } = req.body;

  try {
    const results = await emailsController.insertEmail(
      receiver,
      subject,
      content
    );
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});
