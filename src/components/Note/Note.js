function Note(props) {
    const data = props.note;
    const date = new Date(data.timestamp);

    const handleDelete = () => {
        props.removeNote(data.timestamp);
    }

    const viewNote = () => {
        props.viewSingleNote(data);
    }

    return (
        <div className="note">
            <div className="row">
                <div>
                   <span dangerouslySetInnerHTML={{ __html: data.note}}></span> 
                   <p className="note-date" onClick={viewNote}>{date.toLocaleDateString('en-EN')}</p>
                </div>
                <button onClick={handleDelete} className="button delete-button">Delete note</button>
            </div>
        </div>
        );
  }
  
  export default Note;