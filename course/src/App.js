import React, { useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MySelect from "./components/UI/select/MySelect";

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

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [selectedSort, setSelectedSort] = useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By name" },
          { value: "description", name: "By description" },
        ]}
      />
      {posts.length !== 0 ? (
        <PostsList remove={removePost} posts={posts} />
      ) : (
        <p style={{ textAlign: "center", fontSize: "16px" }}>Notes not found</p>
      )}
    </div>
  );
}

export default App;
