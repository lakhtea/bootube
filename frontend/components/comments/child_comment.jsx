import React from "react";
import Avatar from "../user/avatar";
import moment from "moment";

export default function ChildComment({ comment }) {
  return (
    <div className="child-comment-container">
      <Avatar
        id={comment.user_id}
        username={comment.username}
        avatar={comment.avatarUrl}
        clickable={true}
      />
      <div className="reply-user">{comment.username}</div>
      <div className="reply-updated">
        {moment(comment.updated_at).fromNow()}
      </div>
      <div className="reply-body">{comment.body}</div>
    </div>
  );
}
