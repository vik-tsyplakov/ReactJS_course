import React from "react";
import MyButton from "./UI/button/MyButton";

export default function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
          <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
        </div>
      </div>
    </div>
  );
}
