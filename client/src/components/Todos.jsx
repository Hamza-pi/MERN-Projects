import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions";
import { ACTIVE_TODO, ALL_TODO, DONE_TODO } from "../redux/actions/constants";
import Tabs from "./Tabs";
import Todo from "./Todo";
const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  const getTodos = () => {
    switch (currentTab) {
      case ALL_TODO:
        return todos;
      case DONE_TODO:
        return todos.filter((todo) => todo.done);

      case ACTIVE_TODO:
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  };
  return (
    <>
      <article>
        <Tabs currentTab={currentTab} />
        <ul>
          {getTodos().map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </article>
    </>
  );
};

export default Todos;
