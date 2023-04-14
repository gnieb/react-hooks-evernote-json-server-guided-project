import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, handleChosen, addNewNote}) {

  function handleClick () {
   const newNote = {
      "userId": 1,
      "title":"default",
      "body": "placeholder"
    }
    fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote)
    })
    .then(r=> r.json())
    .then(note => addNewNote(note))
  }



  return (
    <div className="master-detail-element sidebar">
      <NoteList notes = {notes} handleChosen={handleChosen}/>
      <button onClick={handleClick} >New</button>
    </div>
  );
}

export default Sidebar;
