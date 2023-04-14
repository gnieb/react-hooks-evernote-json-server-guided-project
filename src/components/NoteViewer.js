import React from "react";

function NoteViewer({chosenNote, handleEditMode}) {

function handleClick() {
  return handleEditMode()
}

  return (
    <>
      <h2>{chosenNote.title}</h2>
      <p>{chosenNote.body}</p>
      <button onClick={handleClick}>Edit</button>
    </>
  );
}

export default NoteViewer;
