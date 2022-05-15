import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "../components/Note";
import { notesUrl } from "../config";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const { data } = await axios.get(notesUrl);
    const reversedData = data.reverse();

    setNotes(reversedData);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {notes.map((note, idx) => {
        const { id, title, content, url } = note;

        return (
          <Note
            key={idx}
            id={id}
            imageUrl={url}
            title={title}
            content={content}
          />
        );
      })}
    </div>
  );
}
