import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", description: "JS is programming language" },
    { id: 2, title: "C#", description: "C# is programming language" },
    { id: 3, title: "Java", description: "Java is programming language" },
    { id: 4, title: "Python", description: "Python is programming language" },
    { id: 5, title: "PHP", description: "PHP is programming language" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      description,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          value={description}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
