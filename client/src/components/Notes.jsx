import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
const Notes = () => {
  let notes = useSelector((state) => state.notes);
  const searchItem = useSelector((state) => state.searchItem);
  if (searchItem.length !== 0) {
    notes = searchItem;
  }
  return (
    <article>
      <ul>
        {notes.length ? (
          notes.map((note) => <Note note={note} key={note._id} />)
        ) : (
          <h1 className="no-note">
            No Notes 😴 .Pleas Add One By Clicking (+) Button
          </h1>
        )}
      </ul>
    </article>
  );
};

export default Notes;
