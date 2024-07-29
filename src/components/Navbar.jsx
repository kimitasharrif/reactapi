import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/products">Products</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar
