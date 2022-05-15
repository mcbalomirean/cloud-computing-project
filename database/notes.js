import { executeQuery } from ".";

const getAllNotes = async () => {
  const query =
    "SELECT n.*, i.url, i.text FROM notes n LEFT JOIN images i ON n.image_id = i.id";

  const rows = await executeQuery(query);
  return rows;
};

const getNoteById = async (id) => {
  const query =
    "SELECT n.*, i.url, i.text FROM notes n LEFT JOIN images i ON n.image_id = i.id WHERE n.id = ?";

  const rows = await executeQuery(query, [id]);
  return rows;
};

const insertNote = async (title, content) => {
  if (!title || !content) {
    throw new Error("Missing parameters for note insertion.");
  }

  const query = `INSERT INTO notes (title, content) VALUES (?, ?)`;

  const rows = await executeQuery(query, [title, content]);
  return rows;
};

const insertNoteFromImage = async (imageId, title, content) => {
  if (!imageId || !content) {
    throw new Error("Missing parameters for note insertion from image.");
  }

  const query = `INSERT INTO notes (image_id, title, content) VALUES (?, ?, ?)`;

  const rows = await executeQuery(query, [imageId, title, content]);
  return rows;
};

const updateNoteById = async (title, content, id) => {
  if (!title || !content) {
    throw new Error("Missing parameters for note update.");
  }

  const query = "UPDATE notes SET title = ?, content = ? WHERE id = ?";

  const rows = await executeQuery(query, [title, content, id]);
  return rows;
};

const deleteNoteById = async (id) => {
  const query = "DELETE FROM notes WHERE id = ?";

  const rows = await executeQuery(query, [id]);
  return rows;
};

export const notesController = {
  getAllNotes,
  getNoteById,
  insertNote,
  insertNoteFromImage,
  updateNoteById,
  deleteNoteById,
};
