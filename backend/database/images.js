import { executeQuery } from ".";

const insertImage = async (url, labels) => {
  if (!url || !labels) {
    throw new Error("Missing parameters for image insertion.");
  }

  const query = `INSERT INTO images (url, labels) VALUES (?, ?)`;

  const rows = executeQuery(query, [url, labels]);
  return rows;
};

export const imagesController = {
  insertImage,
};
