import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import TableData from "./components/TableData";
import AddEditForm from "./components/AddEditForm";
import { fetchUsers } from "./api"; 
import React from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null); 

  useEffect(() => {
    fetchUsers().then(setData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableData data={data} setData={setData} setUserToEdit={setUserToEdit} />} />
        <Route path="/add-edit" element={<AddEditForm data={data} setData={setData} userToEdit={userToEdit} />} />
      </Routes>
    </BrowserRouter>
  );
}
