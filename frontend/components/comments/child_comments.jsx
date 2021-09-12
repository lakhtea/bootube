import React from "react";
import ChildComment from "./child_comment";

export default function ChildComments({
  replies,
  editComment,
  history,
  currentUser,
}) {
  if (!replies.length) return null;

  return (
    <div>
      {replies.map((comment) => (
        <ChildComment
          currentUser={currentUser}
          history={history}
          key={comment.id}
          editComment={editComment}
          comment={comment}
        />
      ))}
    </div>
  );
}
