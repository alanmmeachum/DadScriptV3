import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./views/Header";
import Blog from "./views/Blog";
import axios from "axios";
import IndividualBlog from "./views/IndividualBlog";
import Contact from "./views/Contact";
import About from "./views/About";
import "./css/Contact.css";
import "./css/App.css";
import "./css/utils.css";
import "./css/Header.css";
import "./css/Mobile-Nav.css";
import "./css/Blog.css";
import "./css/index.css";
import Footer from "./views/Footer";

function App() {
  const http = axios.create({
    baseURL: "https://dadscript-0t55.onrender.com/api"
  });

  const [currentTab, setCurrentTab] = useState(); //Trying to figure out how to keep the tab (Blog/About/Contact) selected orange when that tab is selected
  const [allBlogs, setAllBlogs] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
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
