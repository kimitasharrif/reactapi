import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../index.css'

const Comments = () => {
  const[loading, setLoading]= useState(false)
  const [comments, setComments] = useState([])

  useEffect(()=>{
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((rensponse)=>{
      setComments(rensponse.data)
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })

  }) 
  return (
    // 
    <div className="container">
      {comments?.map((comment,key)=>(
        <div className="card">
          <h2>{comment.name}</h2>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
          <button>Remove</button> 
        </div>
      ))}
    </div>
  )
}

export default Comments
