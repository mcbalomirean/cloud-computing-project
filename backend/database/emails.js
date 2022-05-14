import { executeQuery } from ".";

const getAllEmails = async () => {
  const query = "SELECT * FROM emails";

  const rows = executeQuery(query);
  return rows;
};

const getEmailById = async (id) => {
  const query = "SELECT * FROM emails WHERE id = ?";

  const rows = executeQuery(query, [id]);
  return rows;
};

const insertEmail = async (receiver, subject, content) => {
  if (!receiver || !subject || !content) {
    throw new Error("Missing parameters for e-mail insertion.");
  }

  const query = `INSERT INTO emails (receiver, subject, content) VALUES (?, ?, ?)`;

  const rows = executeQuery(query, [receiver, subject, content]);
  return rows;
};

const updateEmailById = async (receiver, subject, content, id) => {
  if (!receiver || !subject || !content) {
    throw new Error("Missing parameters for e-mail insertion.");
  }

  const query =
    "UPDATE emails SET receiver = ?, subject = ?, content = ? WHERE id = ?";

  const rows = executeQuery(query, [receiver, subject, content, id]);
  return rows;
};

const deleteEmailById = async (id) => {
  const query = "DELETE FROM emails WHERE id = ?";

  const rows = executeQuery(query, [id]);
  return rows;
};

export const emailsController = {
  getAllEmails,
  getEmailById,
  insertEmail,
  updateEmailById,
  deleteEmailById,
};
