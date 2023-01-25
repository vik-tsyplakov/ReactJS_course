import React from "react";
import { useState } from "react";
import MyButtonRed from "./UI/button/MyButtonRed";
import MyButtonGreen from "./UI/button/MyButtonGreen";
import MyInput from "./UI/input/MyInput";

export default function PostForm(props) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    props.create(newPost);
    setPost({ title: "", body: "" });
  };

  const closeModal = () => {
    props.setVisible(false);
    setPost({ title: "", body: "" });
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
          <MyButtonRed
            style={{
              marginBottom: "10px",
              marginRight: "5px",
              padding: "5px 10px",
            }}
            onClick={() => closeModal()}
          >
            X
          </MyButtonRed>
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
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Description"
        />
        <div style={{ marginTop: "15px" }}>
          <MyButtonGreen onClick={addNewPost}>Create post</MyButtonGreen>
        </div>
      </form>
    </div>
  );
}
