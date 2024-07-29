import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from './components/Comments';
import Users from './components/Users';
import Todo from './components/Todo';
import Photos from './components/Photos';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import Products from './components/Products';



function App() {
  return (
    <BrowserRouter>
       <div className="App">
        {/* navbar goes here */}
        <Navbar />
        <Routes>
          <Route path="/comments" element={<Comments />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/todos" element={<Todo />}/>
          <Route path="/photos" element={<Photos />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/products" element={<Products />}/>

          







        </Routes>

      
    </div>
    </BrowserRouter>
 
  );
}

export default App;
