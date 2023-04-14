import React from "react";

function NoteViewer({chosen}) {
  return (
    <>
      <h2>{chosen.title}</h2>
      <p>{chosen.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
