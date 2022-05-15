import { Router } from "express";
import { notesController, imagesController } from "../database";

export const imagesRouter = Router();

imagesRouter.post("/", async (req, res) => {
  const { url, labels } = req.body;

  try {
    const results = await imagesController.insertImage(url, labels);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});
