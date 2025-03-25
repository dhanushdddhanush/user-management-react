import React from 'react';
import { useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";
function Roles() {
const [expenses, setExpenses] = useState([]);
const[search, setSearch]=useState('');
useEffect(()=>{
    fetch('http://localhost:8080/users/roles')
    .then((response) => response.json())
    .then((data) => setExpenses(data));
},[]);
const navigate = useNavigate();
useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);
  const handleAdd = () => {
   
    navigate("/add-edit");
  };
 const handleSearch=expenses.filter((expense)=>expense.name.toLowerCase().includes(search.toLowerCase()))
  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  return (
   <>
   <input type="search"  name="search" id="" onChange={(e)=>setSearch(e.target.value)} />
  
<table >
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
           
        </tr>
    </thead>
    <tbody>
{
    handleSearch.map((expense)=>(
      <tr key={expense.id}>
        <td>{expense.id}</td>
        <td>{expense.name}</td>
        
        <td>{expense.password}</td>
        <td><button>Edit</button> <button onClick={()=>handleDelete(expense.id)}>Delete</button></td>
      </tr>
    ))
}
</tbody>
</table>
   </> 
   )
}

export default Roles;
