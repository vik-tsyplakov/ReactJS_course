import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function PostsList(props) {
  if (!props.posts.length) {
    return (
      <p style={{ textAlign: "center", fontSize: "16px" }}>Notes not found</p>
    );
  }

  return (
    <div>
      <TransitionGroup>
        {props.posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem number={index + 1} post={post} remove={props.remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
