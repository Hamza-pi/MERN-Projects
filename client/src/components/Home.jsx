import React from "react";
import { Link } from "react-router-dom";
import Notes from "./Notes";
import Search from "./Search";
const Home = () => {
  return (
    <div className="app">
      <Search />
      <Notes />
      <Link to="/addNote" className="add">
        +
      </Link>
    </div>
  );
};

export default Home;
