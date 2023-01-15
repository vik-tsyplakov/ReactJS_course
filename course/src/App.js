import React, { useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", description: "JS is programming language" },
    { id: 2, title: "C#", description: "C# is programming language" },
    { id: 3, title: "Java", description: "Java is programming language" },
    { id: 4, title: "Python", description: "Python is programming language" },
    { id: 5, title: "PHP", description: "PHP is programming language" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
