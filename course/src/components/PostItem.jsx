import React from "react";

export default function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {" "}
            {props.id}. {props.title}
          </strong>
          <div>{props.description}</div>
        </div>
        <div className="post__btn">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}
