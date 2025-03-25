import React from 'react';
import { useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
function TableData() {
const [expenses, setExpenses] = useState([]);
const[search, setSearch]=useState('');
useEffect(()=>{
    fetch('http://localhost:8080/users')
    .then((response) => response.json())
    .then((data) => setExpenses(data));
},[]);
const navigate = useNavigate();
useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);
  
  const handleRoles = () => {
   
    navigate("/roles");
  };
  const handleSearch = expenses.filter(
    (expense) =>
        expense.email.toLowerCase().includes(search.toLowerCase()) ||
    expense.username.toLowerCase().includes(search.toLowerCase()) 
  );


const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:8080/users/user/delete/${id}`);
    alert("User deleted successfully!");
    setExpenses(expenses.filter((expense) => expense.id !== id)); 
  } catch (error) {
    console.error("Error deleting user:", error);
    alert("Failed to delete user.");
  }
};

  return (
   <>
   <input type="search"  name="search" id="" onChange={(e)=>setSearch(e.target.value)} />
   <button onClick={() => navigate("/add")}>Add new expense</button>
   <button onClick={handleRoles}>Roles</button>
<table >
    <thead>
        <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            
<th>Modify</th>
        </tr>
    </thead>
    <tbody>
{
    handleSearch.map((expense)=>(
      <tr key={expense.id}>
        <td>{expense.id}</td>
        <td>{expense.username}</td>
        <td>{expense.email}</td>
        <td>{expense.password}</td>
        <td><button onClick={() => navigate(`/edit/${expense.id}`)}>Edit</button> <button onClick={()=>handleDelete(expense.id)}>Delete</button></td>
      </tr>
    ))
}
</tbody>
</table>
   </> 
   )
}

export default TableData;
