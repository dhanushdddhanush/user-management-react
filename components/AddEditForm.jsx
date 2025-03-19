import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddEditForm = ({ data, setData, userToEdit }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    if (userToEdit) {
        return {
            id: userToEdit.id,  
            name: userToEdit.name,  
            phone: userToEdit.phone,  
            city: userToEdit.address ? userToEdit.address.city : "",  
            company: userToEdit.company ? userToEdit.company.name : ""  
        };
    } else {
        return {
            id: data.length + 1,  
            name: "",  
            phone: "",  
            city: "",  
            company: ""  
        };
    }
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

    if (userToEdit) {
    
      const updatedData = data.map((item) =>
        item.id === userToEdit.id ? { ...item, ...updatedUser } : item
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
        <h2>{userToEdit ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="number"name="id"placeholder="Enter ID"value={formData.id}onChange={handleChange}disabled={userToEdit} />
          <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Enter Phone" value={formData.phone} onChange={handleChange} />
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
