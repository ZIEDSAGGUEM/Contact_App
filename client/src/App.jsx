import React from "react";
import Contacts from "./components/Contacts";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/add" element={<AddContact />} />
    </Routes>
  );
};

export default App;
