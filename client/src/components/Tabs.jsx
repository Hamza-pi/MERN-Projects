import React from "react";
import { TABS } from "../redux/actions/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleTab, deleteTodo } from "../redux/actions";
const Tabs = ({ currentTab }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };
  return (
    <div className="tabs">
      {TABS.map((tab, key) => (
        <button
          key={key}
          className={tab === currentTab ? "button selected" : "button"}
          onClick={() => dispatch(toggleTab(tab))}
        >
          {tab}
        </button>
      ))}
      {todos.some((todo) => todo.done) ? (
        <button className="button clear" onClick={removeDoneTodos}>
          Remove Done Todos
        </button>
      ) : null}
    </div>
  );
};

export default Tabs;
