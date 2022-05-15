import { Router } from "express";
import { notesController } from "../database";

export const notesRouter = Router();

notesRouter.get("/", async (req, res) => {
  try {
    const results = await notesController.getAllNotes();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

notesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const results = await notesController.getNoteById(id);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

notesRouter.post("/", async (req, res) => {
  const { title, content } = req.body;

  try {
    const results = await notesController.insertNote(title, content);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

notesRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const results = await notesController.updateNoteById(title, content, id);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

notesRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const results = await notesController.deleteNoteById(id);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});
