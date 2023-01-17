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
  const closeModal = () => {
    props.setVisible(false);
    setPost({ title: "", description: "" });
  };

  return (
    <div>
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <MyButton
            style={{
              marginBottom: "5px",
              padding: "5px 10px",
            }}
            onClick={() => closeModal()}
          >
            X
          </MyButton>
        </div>
        <MyInput
          value={post.title}
          style={{
            marginBottom: "8px",
          }}
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
        <div style={{ marginTop: "7px" }}>
          <MyButton onClick={addNewPost} style={{ backgroundColor: "#00DC01" }}>
            Create post
          </MyButton>
        </div>
      </form>
    </div>
  );
}
