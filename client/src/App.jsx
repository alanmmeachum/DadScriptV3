import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./views/Header";
import Blog from "./views/Blog";
import axios from "axios";
import Home from "./views/Home";
import Contact from "./views/Contact";
import "./css/App.css";
import "./css/utils.css";
import "./css/Header.css";
import "./css/Mobile-Nav.css";
import "./css/Blog.css";
import "./css/index.css";
import About from "./views/About";

function App() {
  const http = axios.create({
    baseURL: "http://localhost:8002/api",
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog http={http} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
