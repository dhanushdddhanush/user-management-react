import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function TableData({ data, setData, setUserToEdit }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    setUserToEdit(null); 
    navigate("/add-edit");
  };

  const handleEdit = (user) => {
    setUserToEdit(user); 
    navigate("/add-edit");
  };

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const handleSearch = data.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.address?.city.toLowerCase().includes(search.toLowerCase()) ||
      user.company?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Users Data</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleAdd}>Add new user</button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.address?.city}</td>
              <td>{user.company?.name}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>{" "}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
