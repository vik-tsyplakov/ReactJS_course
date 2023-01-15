import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MyInput from "./components/UI/input/MyInput";
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

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [
        ...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])),
      ];
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery) ||
        post.title.toUpperCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By name" },
          { value: "description", name: "By description" },
        ]}
      />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} />
      ) : (
        <p style={{ textAlign: "center", fontSize: "16px" }}>Notes not found</p>
      )}
    </div>
  );
}

export default App;
