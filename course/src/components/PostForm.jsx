import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm(props) {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    props.create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <div>
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
        <MyButton onClick={addNewPost} style={{ backgroundColor: "#00DC01" }}>
          Create post
        </MyButton>
      </form>
    </div>
  );
}
