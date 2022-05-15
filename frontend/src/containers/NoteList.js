import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "../components/Note";
import { notesUrl } from "../config";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const { data } = await axios.get(notesUrl);
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {notes.map((note, idx) => {
        const { title, content } = note;

        return <Note key={idx} title={title} content={content} />;
      })}
    </div>
  );
}
