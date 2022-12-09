import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todos from "./components/Todos";
const App = () => {
  return (
    <div id="app">
      <Header />
      <Form />
      <Todos />
    </div>
  );
};

export default App;
