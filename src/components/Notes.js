import React from "react";

export default function Notes({ search, notes, deleteNote, setNote }) {
  if (notes.length !== 0) {
    if (search.color === null) {
      return (
        <div className="container">
          {notes.map((note) => (
            <div className="note">
              <div
                className="title"
                onClick={() => setNote(note)}
                style={{
                  borderLeftWidth: "20px",
                  borderLeftColor: note.rgb,
                  borderLeftStyle: "solid",
                }}
              >
                {note.title.length > 18
                  ? note.title.substring(0, 18).concat("...")
                  : note.title}
              </div>
              <p className="body">
                {note.body.length > 80
                  ? note.body.substring(0, 80).concat("...")
                  : note.body}
              </p>
              <div className="trash" onClick={() => deleteNote(note.title)}>
                Trash
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <>
          {notes.filter((note) => note.color === search.color).length === 0 ? (
            <div className="noNotes">
              <h2>There isn't any note with the color {search.color}</h2>
              <p>Please, add a note</p>
            </div>
          ) : (
            <div className="container">
              {notes
                .filter((note) => note.color === search.color)
                .map((note) => (
                  <div className="note">
                    <div
                      className="title"
                      onClick={() => setNote(note)}
                      style={{
                        borderLeftWidth: "20px",
                        borderLeftColor: note.rgb,
                        borderLeftStyle: "solid",
                      }}
                    >
                      {note.title.length > 18
                        ? note.title.substring(0, 18).concat("...")
                        : note.title}
                    </div>
                    <p className="body">
                      {note.body.length > 80
                        ? note.body.substring(0, 80).concat("...")
                        : note.body}
                    </p>
                    <div
                      className="trash"
                      onClick={() => deleteNote(note.title)}
                    >
                      Trash
                    </div>
                  </div>
                ))}
            </div>
          )}
        </>
      );
    }
  } else {
    return (
      <div className="noNotes">
        <h2>There isn't any note yet</h2>
        <p>Please, add a note</p>
      </div>
    );
  }
}
