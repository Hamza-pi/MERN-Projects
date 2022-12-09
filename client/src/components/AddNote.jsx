import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AddNote = () => {
    dispatch(addNote(title, data));
    navigate("/");
  };
  return (
    <div>
      <form className="form">
        <h2 className="formHeading">Add New Note</h2>
        <input
          type="text"
          className="formTitle"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          className="formTitle"
          onChange={(e) => setData(e.target.value)}
        ></textarea>
        <div className="buttons">
          <Link to="/" className="button go-back">
            Back
          </Link>
          <button className="button update" onClick={() => AddNote()}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
