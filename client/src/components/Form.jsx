import React, { useState } from "react";
import { addNewTodo } from "../redux/actions/index.js";
import { useDispatch } from "react-redux";
const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const SumbitForm = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  return (
    <>
      <form className="form" onSubmit={SumbitForm}>
        <input
          placeholder="Enter Todo..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
    </>
  );
};

export default Form;
