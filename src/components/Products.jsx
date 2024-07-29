import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../index.css'

const Products = () => {
    const [loading, setLoading]= useState(false)
    const[products, setProducts]= useState([])
    useEffect(()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((rensponse)=>{
            setProducts(rensponse.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    })
  return (
     
    <div className="container">
  {products?.map((product,key)=>(
    <div className="card">
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p> {product.image}</p>
      {/* internal
      Local Image:

    Import the image file: import userImage from './assets/userImage.jpg';
     Use the <img> tag: <img src={userImage} alt="User" width="50" height="50" />
     External Image URL:

    Directly use the URL in the src attribute: <img src="https://via.placeholder.com/50" alt="User" width="50" height="50" /> */}
      {/* exteernal */}
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="User" width="50" height="50" />
      {/* button to deldete usere  */}
      <button>Remove</button>
    </div>
  ))}
  </div>
  )
}

export default Products
