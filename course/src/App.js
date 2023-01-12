import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
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
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
