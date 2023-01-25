import React from "react";
import cl from "./MyButton.module.css";

export default function MyButtonRed({ children, ...props }) {
  return (
    <button type="button" {...props} className={cl.myBtn + ` ` + cl.myBtn_red}>
      {children}
    </button>
  );
}
