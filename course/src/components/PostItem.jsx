import React from "react";

export default function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.number}. {props.post.title}
          </strong>
          <div>{props.post.description}</div>
        </div>
        <div className="post__btn">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}
