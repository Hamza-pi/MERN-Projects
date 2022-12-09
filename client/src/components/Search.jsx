import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { searchNote } from "../redux/actions";
const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const search = () => {
    setTimeout(() => {
      dispatch(searchNote(text));
    }, 100);
  };
  return (
    <>
      <form className="searchbar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="lens" />
        <input
          type="text"
          className="input"
          placeholder="Search Notes By Title"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={() => search()}
        />
      </form>
    </>
  );
};

export default Search;
