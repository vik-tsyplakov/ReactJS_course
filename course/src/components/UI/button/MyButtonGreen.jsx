import React from "react";
import cl from "./MyButton.module.css";

export default function MyButtonGreen({ children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={cl.myBtn + ` ` + cl.myBtn_green}
    >
      {children}
    </button>
  );
}
