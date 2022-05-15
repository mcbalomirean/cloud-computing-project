import React from "react";
import NoteForm from "../containers/NoteForm";
import NoteList from "../containers/NoteList";

export default function MainPage() {
  return (
    <div id="MainPage" className="container grid grid-cols-2 mx-auto p-4">
      <NoteList />
      <NoteForm />
    </div>
  );
}
