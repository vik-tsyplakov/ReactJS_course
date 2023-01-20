import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/posts"
        >
          Posts
        </NavLink>
      </div>
    </div>
  );
}
