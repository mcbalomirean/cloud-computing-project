import React, { useState } from "react";
import axios from "axios";
import { imagesUrl } from "../config";

const initialFormState = {
  title: "",
  url: "",
};

export default function ImageNoteForm() {
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleInputSubmit = async () => {
    try {
      if (form.title === "" || form.url === "") {
        alert("One of the fields is empty.");
      }

      await axios.post(imagesUrl, form);
      window.location.reload();
    } catch (error) {
      alert("Couldn't insert note!");
      console.log(error);
    }
  };

  return (
    <div id="ImageNoteForm" className="py-2">
      <div className="font-bold text-xl mb-2">
        Insert a new note using an image!
      </div>
      <form className="w-full max-w-md">
        <input
          className="shadow-md appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="imageNoteTitleInput"
          type="text"
          placeholder="Title..."
          name="title"
          value={form.title}
          onChange={handleInputChange}
        />
        <input
          className="shadow-md appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="imageNoteUrlArea"
          type="text"
          placeholder="Url..."
          name="url"
          value={form.url}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className={
            form.title === "" || form.url === ""
              ? "w-full bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
              : "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
          onClick={handleInputSubmit}
          disabled={form.title === "" || form.url === ""}
        >
          Insert
        </button>
      </form>
    </div>
  );
}
