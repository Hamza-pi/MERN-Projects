import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllNotes } from "./redux/actions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import AddNote from "./components/AddNote";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Form />} />
        <Route path="/addNote" element={<AddNote />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
