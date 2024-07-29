import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../index.css'


const Users = () => {
  
   const[loaading, setLoading] = useState(false)
   const[users, setUsers] = useState([])


   useEffect( ()=>{
    //set loading to be true
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      setUsers(response.data)
      setLoading(false) 
    })
  .catch((error)=>{
    setLoading(false)
    console.log(error)
  })
  
},[])
// lets console and see if we get all users 
// console.log(users)
return (
    // <div>Users</div>
<div className="container">
  {users?.map((user,key)=>(
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p> {user.phone}</p>
      {/* button to deldete usere  */}
      <button>Remove</button>
    </div>
  ))}
</div>



)
}

export default Users
