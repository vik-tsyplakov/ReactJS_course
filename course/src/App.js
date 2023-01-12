import React from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PostItem
        id={1}
        title={"JS"}
        description={"JS is programming language"}
      />
      <PostItem
        id={2}
        title={"C#"}
        description={"C# is programming language"}
      />
      <PostItem
        id={3}
        title={"Java"}
        description={"Java is programming language"}
      />
      <PostItem
        id={4}
        title={"Python"}
        description={"Python is programming language"}
      />
      <PostItem
        id={5}
        title={"PHP"}
        description={"PHP is programming language"}
      />
    </div>
  );
}

export default App;
