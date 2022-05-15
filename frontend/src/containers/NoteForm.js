import React, { useState } from "react";
import axios from "axios";
import { notesUrl } from "../config";

const initialFormState = {
  title: "",
  content: "",
};

export default function NoteForm() {
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleInputSubmit = async () => {
    try {
      if (form.title === "" || form.content === "") {
        alert("One of the fields is empty.");
      }

      await axios.post(notesUrl, form);
    } catch (error) {
      alert("Couldn't insert note!");
      console.log(error);
    }
  };

  return (
    <div id="NoteForm">
      <div className="font-bold text-xl mb-2">Insert a new note!</div>
      <form className="w-full max-w-md">
        <input
          className="shadow-md appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="noteTitleInput"
          type="text"
          placeholder="Title..."
          name="title"
          value={form.title}
          onChange={handleInputChange}
        />
        <textarea
          className="shadow-md appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none"
          id="noteContentArea"
          type="text"
          placeholder="Content..."
          name="content"
          value={form.content}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className={
            form.title === "" || form.content === ""
              ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
          onClick={handleInputSubmit}
          disabled={form.title === "" || form.content === ""}
        >
          Insert
        </button>
      </form>
    </div>
  );
}
