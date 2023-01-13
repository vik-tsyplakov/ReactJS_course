import React from "react";
import PostItem from "./PostItem";

export default function PostsList(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
        <PostItem number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
}
