import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Note from "../Note/Note";
import NoteForm from "../NoteForm/NoteForm";
import { useHistory } from "react-router-dom";

function NotesPage() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    const history  = useHistory(); 

    const saveNote = (note) => {
        let newNote = {
            timestamp: Date.now(),
            note: note,
        };

        setNotes([newNote, ...notes]);
        localStorage.setItem('notes', JSON.stringify([newNote, ...notes]));
    }

    const removeNote = (timestamp) => {
        let notesList = notes.filter((note) => {
            return note.timestamp !== timestamp
          })
          setNotes(notesList);
          localStorage.setItem('notes', JSON.stringify(notesList));
    } 

    const viewSingleNote = (note) => {
        localStorage.setItem('currentNote', JSON.stringify(note));
        history.push({pathname: '/note', note: note});
    };   

    return (
        <div>
            <Navbar />
            <NoteForm saveNote={saveNote}/>
            <div className="center">
                <h1>Latest notes</h1>
                <div>
                    {notes.map((note, index) => 
                        <Note key={index} note={note} removeNote={removeNote} viewSingleNote={viewSingleNote}/>
                    )}
                </div>
            </div>
        </div>
    );
  }
  
  export default NotesPage;