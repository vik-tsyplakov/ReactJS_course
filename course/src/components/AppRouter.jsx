import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
    </Routes>
  );
}
