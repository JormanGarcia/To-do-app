import React, { useState } from "react";
import uuid from "react-uuid";

export default function Modal({
  newNoteMenu,
  setNewNoteMenu,
  notes,
  setNotes,
}) {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    color: "black",
    rgb: "rgb(0,0,0)",
  });

  const [alerts, setAlerts] = useState([]);

  function submit() {
    if (newNote.title.length === 0) {
      setAlerts([
        ...alerts,
        {
          msg: "The title can't be empty",
          id: uuid(),
        },
      ]);
    } else if (newNote.body.length < 5) {
      setAlerts([
        ...alerts,
        {
          msg: "The body should have at least 5 characters",
          id: uuid(),
        },
      ]);
    } else {
      setNotes([...notes, newNote]);

      setNewNote({
        title: "",
        body: "",
        color: "black",
        rgb: "rgb(0,0,0)",
      });
    }
  }

  function deleteAlert(id) {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  }

  return (
    <>
      <div className={newNoteMenu ? "active modal" : "modal"}>
        <div className="exit">
          <h1 onClick={() => setNewNoteMenu(false)}>x</h1>
        </div>
        <input
          placeholder="Set title here..."
          value={newNote.title}
          onChange={(e) =>
            setNewNote({
              ...newNote,
              title: e.target.value,
            })
          }
        />
        <textarea
          value={newNote.body}
          onChange={(e) =>
            setNewNote({
              ...newNote,
              body: e.target.value,
            })
          }
        />
        <p className="newNote-color">Color: {newNote.color}</p>
        <div
          className="colorSelector"
          onChange={(e) =>
            setNewNote({
              ...newNote,
              color: e.target.id,
              rgb: e.target.value,
            })
          }
        >
          <label for="black"></label>
          <label for="red"></label>
          <label for="green"></label>
          <label for="yellow"></label>
          <label for="blue"></label>
          <input type="radio" name="color" value="rgb(0, 0, 0)" id="black" />
          <input type="radio" name="color" value="rgb(231, 118, 98)" id="red" />
          <input
            type="radio"
            name="color"
            value="rgb(76, 218, 130)"
            id="green"
          />
          <input
            type="radio"
            name="color"
            value="rgb(241, 231, 92)"
            id="yellow"
          />
          <input
            type="radio"
            name="color"
            value="rgb(121, 180, 248)"
            id="blue"
          />
        </div>

        <button onClick={submit}>Add Note</button>
      </div>
      <div className="alerts">
        {alerts.map((alert) => (
          <div className="alert" onClick={() => deleteAlert(alert.id)}>
            {alert.msg}
          </div>
        ))}
      </div>
    </>
  );
}
