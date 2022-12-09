import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const [text, setText] = useState(todo.data);
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li className="todo">
      <span
        onClick={() => dispatch(toggleTodo(todo._id))}
        style={{
          textDecoration: todo.done ? "line-through" : "",
          display: editing ? "none" : "",
        }}
      >
        {todo.data}
      </span>
      <form
        style={{ display: editing ? "inline-block" : "none" }}
        onSubmit={submitForm}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="edit-todo"
        />
      </form>

      <span
        className="icon edit"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        Edit
      </span>
      <span className="icon del" onClick={() => dispatch(deleteTodo(todo._id))}>
        Delete
      </span>
    </li>
  );
};

export default Todo;
