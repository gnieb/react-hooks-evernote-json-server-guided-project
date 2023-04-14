import React from "react";

function NoteViewer({chosen, handleEditMode}) {

function handleClick() {
  return handleEditMode()
}

  return (
    <>
      <h2>{chosen.title}</h2>
      <p>{chosen.body}</p>
      <button onClick={handleClick}>Edit</button>
    </>
  );
}

export default NoteViewer;
