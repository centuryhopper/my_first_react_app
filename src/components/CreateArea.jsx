import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import '../styles.css';


// jshint ignore : start

function CreateArea(props)
{
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [noteFlag, SetNoteFlag] = useState(false);

  function handleChange(event)
  {
    const { name, value } = event.target;

    setNote(prevNote =>
    {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event)
  {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">


        {/* use ternary operator */}
        { noteFlag &&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}


        <textarea
          onClick={() => SetNoteFlag(true)}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // use ternary here 1 row vs 3 row
          rows={noteFlag ? "3" : "1"}
        />

        {/* use ternary here */}

        <Zoom in={noteFlag}>
          <Fab onClick={submitNote} aria-label="add"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
