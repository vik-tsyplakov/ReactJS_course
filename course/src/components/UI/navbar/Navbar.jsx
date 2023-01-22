import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.css";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "600",
  };
  return (
    <div className={cl.navbar}>
      <div className={cl.navbar__links}>
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
