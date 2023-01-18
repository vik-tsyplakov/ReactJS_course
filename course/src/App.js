import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import { useFetching } from "./components/Hooks/useFetching";
import { usePosts } from "./components/Hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS is programming language" },
    { id: 2, title: "C#", body: "C# is programming language" },
    { id: 3, title: "Java", body: "Java is programming language" },
    { id: 4, title: "Python", body: "Python is programming language" },
    { id: 5, title: "PHP", body: "PHP is programming language" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ backgroundColor: "#00DC01", marginTop: "25px" }}
        onClick={() => setModal(true)}
      >
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setVisible={setModal} />
      </MyModal>
      <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h2>An error has occurred: {postError}</h2>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} />
      )}
    </div>
  );
}

export default App;
