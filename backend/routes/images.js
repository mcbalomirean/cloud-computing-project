import { Router } from "express";
import { notesController, imagesController } from "../database";
import vision from "@google-cloud/vision";

const visionApi = new vision.ImageAnnotatorClient();

export const imagesRouter = Router();

imagesRouter.post("/", async (req, res) => {
  const { url, title } = req.body;

  try {
    const { id, text } = await imagesController.getImageIdByUrl(url);
    if (id) {
      await notesController.insertNoteFromImage(id, title, text);
      return res.status(200).end();
    }

    const [apiResponse] = await visionApi.textDetection(url);
    const {
      fullTextAnnotation: { text: annotation },
    } = apiResponse;

    const { insertId } = await imagesController.insertImage(url, annotation);
    notesController.insertNoteFromImage(insertId, title, annotation);

    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
});
