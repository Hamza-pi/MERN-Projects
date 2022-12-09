import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "../redux/actions";

const Form = () => {
  let [title, setTitle] = useState("");
  let [data, setData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const notes = useSelector((state) => state.notes);
  const UpdateNote = (id, title, data) => {
    dispatch(updateNote(id, title, data));
    navigate("/");
  };
  return (
    <>
      {notes.map((note) =>
        note._id === id ? (
          <div key={note._id} className="form">
            <h2 className="formHeading">{note.title}</h2>
            <input
              type="text"
              defaultValue={note.title}
              className="formTitle"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              defaultValue={note.data}
              className="formTitle"
              onChange={(e) => setData(e.target.value)}
            ></textarea>
            <div className="buttons">
              <Link to="/" className="button go-back">
                Back
              </Link>
              <button
                className="button update"
                onClick={() =>
                  UpdateNote(
                    note._id,
                    title ? title : note.title,
                    data ? data : note.data
                  )
                }
              >
                Save
              </button>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default Form;
