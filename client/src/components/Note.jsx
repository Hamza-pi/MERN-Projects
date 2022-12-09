import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/actions";
const Note = ({ note }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li key={note._id} className="note">
        <Link to={`/${note._id}`} className="link">
          <span className="title">
            {note.title}
            <span>{note.createdAt}</span>
          </span>
        </Link>
        <span className="data">{note.data.slice(0, 50)}</span>
        <Link to={`/${note._id}`}>
          <FontAwesomeIcon icon={faPen} className="icon edit" />
        </Link>
        <FontAwesomeIcon
          icon={faTrash}
          className="icon del"
          onClick={() => dispatch(deleteNote(note._id))}
        />
      </li>
    </div>
  );
};

export default Note;
