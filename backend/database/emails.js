import { connection } from ".";

const getAllEmails = async () => {
  const query = "SELECT * FROM emails";
  const [rows, fields] = await connection.execute(query);

  return rows;
};

const emailsController = { getAllEmails };
export default emailsController;
