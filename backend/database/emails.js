import { connection } from ".";

const getAllEmails = async () => {
  const query = "SELECT * FROM emails";

  try {
    const [rows, fields] = await connection.execute(query);
    return rows;
  } catch (error) {
    console.error(error);
  }
};

export const emailsController = { getAllEmails };
