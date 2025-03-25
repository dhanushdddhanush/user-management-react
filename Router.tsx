import { BrowserRouter, Route, Routes } from "react-router-dom";

import TableData from "./components/TableData";
import React from "react";
import Roles from "./components/Roles";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableData  />} />
        <Route path="/add" element={<AddForm  />} />
        <Route path="/edit/:id" element={<EditForm />} /> 
        <Route path="/roles" element={<Roles  />} />
      </Routes>
    </BrowserRouter>
  );
}
