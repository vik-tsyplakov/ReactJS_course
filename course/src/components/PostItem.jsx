import React from "react";
import MyButtonBlue from "./UI/button/MyButtonBlue";
import MyButtonRed from "./UI/button/MyButtonRed";
import { useNavigate } from "react-router-dom";

export default function PostItem(props) {
  const navigate = useNavigate();

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
          <MyButtonBlue onClick={() => navigate(`/posts/${props.post.id}`)}>
            open
          </MyButtonBlue>
          <MyButtonRed onClick={() => props.remove(props.post)}>
            delete
          </MyButtonRed>
        </div>
      </div>
    </div>
  );
}
