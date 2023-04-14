import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, handleChosen}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes = {notes} handleChosen={handleChosen}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
