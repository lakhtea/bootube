import React from "react";
import ChildComment from "./child_comment";

export default function ChildComments({ replies, handleClose }) {
  if (!replies.length) return null;

  return (
    <div>
      {replies.map((comment) => (
        <ChildComment
          key={comment.id}
          handleClose={handleClose}
          comment={comment}
        />
      ))}
    </div>
  );
}
