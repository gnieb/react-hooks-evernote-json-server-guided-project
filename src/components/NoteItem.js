import React from "react";

function NoteItem({id, title, body, handleChosen}) {

  const handleClick = (e) => {
    handleChosen(e.target.parentElement['id'])
    console.log(e.target.parentElement['id'])
  }

  return (
    <li id={id} onClick={handleClick}>
      <h2>{title}</h2>
      <p>{body.slice(0,20)}...</p>
    </li>
  );
}

export default NoteItem;
