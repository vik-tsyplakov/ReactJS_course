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
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", description: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
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
