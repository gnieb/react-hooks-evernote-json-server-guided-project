import React, {useState} from "react";

function NoteEditor({chosen, handleEditMode}) {
  const [title, setTitle] = useState(chosen.title)
  const [body, setBody] = useState(chosen.body)

  function cancelEditMode() {
    handleEditMode()
  }

  function handleTitle(e){
    setTitle(e.target.value)
  }
  function handleBody(e){
    setBody(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const editedNote = {
      "userId" : chosen.userId,
      "title" : title,
      "body" : body
    }
    fetch(`http://localhost:3000/notes/${chosen.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedNote)
    })
    
  }



  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <input onChange = {handleTitle} type="text" name="title" value={title}/>
      <textarea onChange={handleBody} name="body" value={body} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={cancelEditMode}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
