import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Notes from "./components/Notes";
import Note from "./components/Note";
function App() {
  const [newNoteMenu, setNewNoteMenu] = useState(false);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [search, setSearch] = useState({
    color: null,
  });

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.title !== id));
  }

  return (
    <>
      <Header setSearch={setSearch} setNewNoteMenu={setNewNoteMenu} />
      <Modal
        notes={notes}
        setNotes={setNotes}
        newNoteMenu={newNoteMenu}
        setNewNoteMenu={setNewNoteMenu}
      />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        setNotes={setNotes}
        setNote={setNote}
        search={search}
      />
      <Note note={note} setNote={setNote} deleteNote={deleteNote} />
    </>
  );
}

export default App;
