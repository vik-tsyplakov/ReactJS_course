import React from "react";

export default function CommentItem(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <p style={{ marginBottom: "10px" }}>{props.comment.email}</p>
      <div>{props.comment.body}</div>
    </div>
  );
}
