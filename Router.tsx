import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AddEditForm from "./components/AddEditForm";
import TableData from "./components/TableData";
import React from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableData data={data} setData={setData} />} />
        <Route path="/add-edit" element={<AddEditForm data={data} setData={setData} />} />
      </Routes>
    </BrowserRouter>
  );
}
