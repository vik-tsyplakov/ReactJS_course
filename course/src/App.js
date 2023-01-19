import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
