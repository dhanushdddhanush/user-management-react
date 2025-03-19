import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

const AddEditForm = ({ data, setData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state || {};

  const [formData, setFormData] = useState({
    id: user.id || data.length + 1, 
    name: user.name || "",
    phone: user.phone || "",
    city: user.address?.city || "",
    company: user.company?.name || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const updatedUser = {
      ...formData,
      address: { city: formData.city }, 
      company: { name: formData.company } 
    };
  
    if (user.id) {
      const updatedData = data.map((item) =>
        item.id === user.id ? { ...item, ...updatedUser } : item
      );
      setData(updatedData);
    } else {
      setData([...data, updatedUser]);
    }
  
    navigate("/");
  };
  

  return (
    <>
      <div>
        <h2>{user.id ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" name="id" placeholder="Enter ID" value={formData.id} onChange={handleChange}disabled={user.id}/>
          <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange}  />
          <input type="tel" name="phone" placeholder="Enter Phone" value={formData.phone} onChange={handleChange}/>
          <input type="text" name="city" placeholder="Enter City" value={formData.city} onChange={handleChange} />
          <input type="text" name="company" placeholder="Enter Company" value={formData.company} onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};

export default AddEditForm;
