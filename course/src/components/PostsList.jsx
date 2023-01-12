import React from "react";
import PostItem from "./PostItem";

export default function PostsList(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
