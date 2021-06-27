import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function SingleNotePage() {
    const history  = useHistory(); 
    const currentNote = JSON.parse(localStorage.getItem('currentNote'));
    const date = new Date(currentNote.timestamp);

    const removeNote = () => {
        let allNotes = JSON.parse(localStorage.getItem('notes'));
        let notesList = allNotes.filter((note) => {
            return note.timestamp !== currentNote.timestamp
          })
        localStorage.setItem('notes', JSON.stringify(notesList));
        viewList();
    }

    const viewList = () => {
        history.push({pathname: '/'});
    }

    return (
        <div>
            <Navbar />
            <div className="button-container">
                <button className="back-button button" onClick={viewList}>Go back</button>
                <button className="delete-button button note-button" onClick={removeNote}>Delete note</button>
            </div>
            <div className="note">
                <span dangerouslySetInnerHTML={{ __html: currentNote.note}}></span>
                <div className="single-note-date">{date.toLocaleDateString('en-EN')}</div>
            </div>
        </div>
    );
  }
  
  export default SingleNotePage;