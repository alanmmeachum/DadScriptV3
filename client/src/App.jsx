import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./views/Header";
import Blog from "./views/Blog";
import axios from "axios";
import IndividualBlog from "./views/IndividualBlog";
import Contact from "./views/Contact";
import About from "./views/About";
import Details from "./views/Details";
import './css/Contact.css'
import "./css/App.css";
import "./css/utils.css";
import "./css/Header.css";
import "./css/Mobile-Nav.css";
import "./css/Blog.css";
import "./css/index.css";
import CreateBlog from "./views/CreateBlog";


function App() {

  const http = axios.create({
    baseURL: "http://localhost:8002/api",
  });

  const [currentTab, setCurrentTab] = useState() //Trying to figure out how to keep the tab (Blog/About/Contact) selected orange when that tab is selected
  const [allBlogs, setAllBlogs] = useState([]);

  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/blogs" element={<Blog http={http} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
          <Route path="/blogs/:id" element={<IndividualBlog http={http}/>} />
          <Route path="/blogs/:id/details" element={<Details http={http}/>} />
          <Route path="/blogs/create" element={<CreateBlog http={http} allBlogs={allBlogs} setAllBlogs={setAllBlogs}/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
