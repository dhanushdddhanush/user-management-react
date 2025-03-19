// import { useState ,useEffect} from 'react'
// import './App.css'

// function App() {
// const [data, setData]=useState([])
// useEffect(() => {
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>response.json())
// .then(data=>setData(data))
// }, []);

//   return (
//     <>
//     <h1>Usersssssssssss Data</h1>
//     <button>Add new user</button>
//      <table border="1" cellPadding="10"  >
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>City</th>
//             <th>Company</th>
//             <th>Edit/Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.phone}</td>
//               <td> {user.address.city}</td>
//               <td>{user.company.name}</td>
//               <td><button>Edit</button> <button>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
     
      
//     </>
//   )
// }

// export default App
