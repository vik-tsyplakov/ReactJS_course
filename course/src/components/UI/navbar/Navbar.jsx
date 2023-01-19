import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
  );
}
