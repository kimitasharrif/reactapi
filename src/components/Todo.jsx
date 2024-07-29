import axios from 'axios'
import React,{useEffect, useState} from 'react'
import '../index.css'


const Todo = () => {
  const[loading, setLoading]= useState(false)
  const[todos, setTodos] = useState([])
  useEffect(()=>{
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{
      setTodos(response.data)
      setLoading(false)
    })
  .catch((error)=>{
    setLoading(false)
    console.log(error)
  })

  })
  return (
    // <div>
    //   <h1>Todos</h1>
    // </div>
    
    
    
    <div className="container">
  {todos?.map((todo,key)=>(
    <div className="card">
      <h2>{todo.title}</h2>
      <p>{todo.completed}</p>
      <p>{todo.id}</p>
      <p> {todo.phone}</p>
      {/* button to deldete usere  */}
      <button>Remove</button>
    </div>
  ))}
  </div>
  )
}

export default Todo
