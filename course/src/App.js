import React, { useState } from "react";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";

import "./styles/App.css";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JS", description: "JS is programming language" },
    { id: 2, title: "C#", description: "C# is programming language" },
    { id: 3, title: "Java", description: "Java is programming language" },
    { id: 4, title: "Python", description: "Python is programming language" },
    { id: 5, title: "PHP", description: "PHP is programming language" },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post name" />
        <input type="text" placeholder="Description" />
        <MyButton>Create post</MyButton>
      </form>
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
