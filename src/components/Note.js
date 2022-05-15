import React from "react";
import axios from "axios";
import { TrashIcon } from "@heroicons/react/solid";
import { notesUrl } from "../config";

export default function Note(props) {
  const { id, imageUrl, title, content } = props;

  const handleDeleteNote = async () => {
    try {
      await axios.delete(`${notesUrl}/${id}`);
      window.location.reload();
    } catch (error) {
      alert("Couldn't delete note!");
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-md rounded overflow-hidden shadow-md my-2">
      {imageUrl ? <img className="w-full" src={imageUrl} alt={title} /> : ""}
      <div className="px-6 py-4">
        <div className="grid grid-cols-2">
          <span className="font-bold text-xl mb-2">{title}</span>
          <TrashIcon
            className="ml-auto self-center w-5 h-5 text-red-500 hover:text-red-700 cursor-pointer"
            onClick={handleDeleteNote}
          />
        </div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}
