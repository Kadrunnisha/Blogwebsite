
import './App.css';
import Nav from "./components/Nav";
import Login from "./components/login";
import Signin from "./components/signin";
import Post from "./components/post";
import Profile from "./components/profile";
import Newblog from "./components/newblogform";
import Catpost from './components/catpost';
import Fullpost from './components/fullpost';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Nav></Nav>
    <Routes>
      <Route path='/profile' element={<><Profile></Profile></>}></Route>
      <Route path="/postBlog" element={<><Newblog></Newblog></>}></Route>
      <Route path="/:id" element={<><Catpost></Catpost></>}></Route>
      <Route path="/posts/:id" element={<><Fullpost></Fullpost></>}></Route>
     <Route path="/" element={<><Post></Post></>}></Route>
      <Route path='/login' element={<><Login></Login></>}></Route>
      <Route path='/signin' element={<><Signin></Signin></>}></Route>
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
