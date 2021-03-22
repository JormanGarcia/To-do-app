import React from "react";

export default function Note({ note, setNote, deleteNote }) {
  return (
    <>
      {note !== null ? (
        <div className="display-note">
          <div onClick={() => setNote(null)} className="exit">
            X
          </div>
          <h1
            style={{
              borderLeftWidth: "20px",
              borderLeftColor: note.rgb,
              borderLeftStyle: "solid",
            }}
          >
            {note.title}
          </h1>
          <p>{note.body}</p>

          <div
            className="delete"
            onClick={() => {
              deleteNote(note.title);
              setNote(null);
            }}
          >
            Delete
          </div>
        </div>
      ) : null}
    </>
  );
}
