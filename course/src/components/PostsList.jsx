import React from "react";
import PostItem from "./PostItem";

export default function PostsList(props) {
  if (!props.posts.length) {
    return (
      <p style={{ textAlign: "center", fontSize: "16px" }}>Notes not found</p>
    );
  }

  return (
    <div>
      {props.posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={post.id}
          remove={props.remove}
        />
      ))}
    </div>
  );
}
