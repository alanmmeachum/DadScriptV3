import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import About from "./views/About";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Home from "./views/Home";
import IndividualBlog from "./views/IndividualBlog";
import "./css/Contact.css";
import "./css/App.css";
import "./css/utils.css";
import "./css/Header.css";
import "./css/Mobile-Nav.css";
import "./css/Blog.css";
import "./css/index.css";

function App() {
  const http = axios.create({
    baseURL: "https://dadscript-0t55.onrender.com/api",
  });

  const [allBlogs, setAllBlogs] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blogs"
            element={
              <Blog http={http} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />
            }
          />
          <Route path="/blogs/:id" element={<IndividualBlog http={http} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
