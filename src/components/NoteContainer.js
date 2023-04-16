import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useEffect, useState } from "react";


function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [chosen, setChosen] = useState(null)
  const [searchString, setSearchString] = useState('')

    useEffect( () => {fetch('http://localhost:3000/notes')
    .then(r => r.json())
    .then(data => setNotes(data))}, [])
  

    // function handleChosen(num) {
    //   setChosen((num))
    // }

    function handleSearched (string) {
      setSearchString(string.toLowerCase())
    }
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchString.toLowerCase()))
   
    function addNewNote (newNote) {
      setNotes([...notes, newNote])
    }

    const chosenNote = notes.find((note) => note.id === parseInt(chosen))

  return (
    <>
      <Search handleSearched={handleSearched}/>
      <div className="container">
        <Sidebar addNewNote={addNewNote} handleChosen={setChosen} notes={filteredNotes}/>
        <Content chosenNote={chosenNote} chosen={chosen}/>
      </div>
    </>
  );
}

export default NoteContainer;
