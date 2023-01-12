import React from "react";
import Counter from "./components/Counter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong> 1. JS</strong>
          <div>JS - programming language</div>
        </div>
        <div className="post__btn">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
