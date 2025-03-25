import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditForm() {
  const { id } = useParams(); // Get the user ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Fetch user data when the component loads
  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${id}`) // Ensure backend has this endpoint
      .then((response) => setFormData(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/users/user/update/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("User updated successfully!");
      navigate("/"); // Redirect to the main page after update
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditForm;
