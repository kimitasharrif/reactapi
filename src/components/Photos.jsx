import React,{useEffect, useState} from 'react'
import '../index.css'
import axios from 'axios'


const Photos = () => {
  const [loading, setLoading]= useState(false)
  const [photos, setPhotos] = useState([])
  useEffect(()=>{
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((rensponse)=>{
      setPhotos(rensponse.data)
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  })
  return (
    <div className="container">
      {photos?.map((photo, key)=>(
        <div className="card">
          <h2>{photo.title}</h2>
          <p>{photo.url}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Photos
