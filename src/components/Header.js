import React from "react";

export default function Header({ setNewNoteMenu, setSearch }) {
  return (
    <div className="header">
      <div
        className="colorSelector"
        onChange={(e) =>
          setSearch({
            color: e.target.value,
          })
        }
      >
        <label
          onClick={() => setSearch({ color: null })}
          for="none-search"
        ></label>
        <label for="black-search"></label>
        <label for="red-search"></label>
        <label for="green-search"></label>
        <label for="yellow-search"></label>
        <label for="blue-search"></label>

        <input type="radio" name="color-search" value="none" id="none" />
        <input
          type="radio"
          name="color-search"
          value="black"
          id="black-search"
        />
        <input type="radio" name="color-search" value="red" id="red-search" />
        <input
          type="radio"
          name="color-search"
          value="green"
          id="green-search"
        />
        <input
          type="radio"
          name="color-search"
          value="yellow"
          id="yellow-search"
        />
        <input type="radio" name="color-search" value="blue" id="blue-search" />
      </div>
      <div className="newNote" onClick={() => setNewNoteMenu(true)}>
        <p>
          New Note <span>+</span>
        </p>
      </div>
    </div>
  );
}
