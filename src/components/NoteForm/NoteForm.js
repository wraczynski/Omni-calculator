import React, {useState} from "react";

function NoteForm(props) {
    const [note, setNote] = useState('');

    const handleInput = (e) => {
        setNote(e.target.value)
    }

    const saveNote = () => {
        note !== '' ? props.saveNote(note) : alert("Nie można dodać pustej notatki");
        setNote('');
    }

    return (
        <div className="note-form">
            <h5>Note</h5>
            <textarea placeholder="Note Text" value={note} rows={10} onChange={handleInput}></textarea>
            <p className="center">
                <button className="button" onClick={saveNote}>Add note</button>
            </p>
        </div>
    );
  }
  
  export default NoteForm;