import React, { useState } from "react";
import Avatar from "../user/avatar";
import moment from "moment";
import CommentLikeContainer from "../likes/comment_like_container";
import ChildCommentFormContainer from "./child_comment_form_container";

export default function ChildComment({ comment, handleClose }) {
  const [reply, toggleReply] = useState(false);

  const replyForm = reply ? (
    <ChildCommentFormContainer
      handleClose={() => toggleReply(false)}
      parentCommentId={comment.parent_comment_id}
    />
  ) : null;

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
      <CommentLikeContainer />
      <div onClick={() => toggleReply(true)} className="reply-button">
        REPLY
      </div>
      {replyForm}
    </div>
  );
}
