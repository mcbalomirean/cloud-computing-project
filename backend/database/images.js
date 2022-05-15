import { executeQuery } from ".";

const getImageIdByUrl = async (url) => {
  if (!url) {
    throw new Error("Missing parameters for image retrieval.");
  }

  const query = "SELECT id, text FROM images WHERE url = ?;";

  const [row] = await executeQuery(query, [url]);
  return row ?? {};
};

const insertImage = async (url, text) => {
  if (!url || !text) {
    throw new Error("Missing parameters for image insertion.");
  }

  const query = `INSERT INTO images (url, text) VALUES (?, ?);`;

  const rows = await executeQuery(query, [url, text]);
  return rows;
};

export const imagesController = {
  getImageIdByUrl,
  insertImage,
};
