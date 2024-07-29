import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../index.css'


const Posts = () => {
  const [loading, setLoading] = useState(false)
  const [posts , setPosts] = useState([])
  useEffect(()=>{
    //set loading to be true
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((rensponse)=>{
      setPosts(rensponse.data)
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  },[])
  // console.log(posts)
  return (
    // <div>
    //   {/* <h1>Posts</h1> */}

    // </div>
    <div className="container">
      {posts?.map((post,key)=>(
        <div className="card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Posts
