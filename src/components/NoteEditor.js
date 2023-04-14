import React, {useState} from "react";

function NoteEditor({chosen, handleEditMode}) {
  const [title, setTitle] = useState(chosen.title)
  const [body, setBody] = useState(chosen.body)

  function cancelEditMode() {
    handleEditMode()
  }

  return (
    <form className="note-editor">
      <input type="text" name="title" value={chosen.title}/>
      <textarea name="body" value={title} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={cancelEditMode}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
