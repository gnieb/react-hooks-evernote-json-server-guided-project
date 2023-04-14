import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useEffect, useState } from "react";


function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [chosen, setChosen] = useState('')

    useEffect( () => {fetch('http://localhost:3000/notes')
    .then(r => r.json())
    .then(data => setNotes(data))}, ([]))
  

    function handleChosen(id) {
      setChosen(notes[id-1])
      console.log(chosen)
    }

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar handleChosen={handleChosen} notes={notes}/>
        <Content chosen={chosen}/>
      </div>
    </>
  );
}

export default NoteContainer;
