import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import { useState } from "react";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({chosen}) {

  const [isEditing, setIsEditing] = useState(false)

  function handleEditMode() {
    setIsEditing(!isEditing)
    
  }

  const getContent = () => {
    if ( isEditing) {
      return <NoteEditor  chosen={chosen} handleEditMode={handleEditMode} />;
    } else if (chosen != '') {
      return <NoteViewer handleEditMode={handleEditMode} chosen={chosen} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
