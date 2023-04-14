import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, handleChosen}) {

  const displayNotes = notes.map(note => {
    return (
      <NoteItem handleChosen={handleChosen} key={note.id} {...note} />
    )
  })


  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
