import React from "react";
import ChildComment from "./child_comment";

export default function ChildComments({ replies }) {
  if (!replies.length) return null;

  return (
    <div>
      {replies.map((comment) => (
        <ChildComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
