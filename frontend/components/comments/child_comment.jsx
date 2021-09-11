import React, { useState } from "react";
import Avatar from "../user/avatar";
import moment from "moment";
import CommentLikeContainer from "../likes/comment_like_container";
import EditCommentForm from "./edit_comment_form";
import ChildCommentFormContainer from "./child_comment_form_container";

export default function ChildComment({ comment, editComment }) {
  const [reply, toggleReply] = useState(false);
  const [edit, toggleEdit] = useState(false);

  const replyForm = reply ? (
    <ChildCommentFormContainer
      handleClose={() => toggleReply(false)}
      parentCommentId={comment.parent_comment_id}
      replyTo={comment.username}
    />
  ) : null;

  const editable = edit ? (
    <EditCommentForm
      handleCloseEdit={() => toggleEdit(false)}
      editComment={editComment}
      comment={comment}
    />
  ) : (
    <div className="reply-body">{comment.body}</div>
  );

  return (
    <div className="child-comment-container">
      <Avatar
        id={comment.user_id}
        username={comment.username}
        avatar={comment.avatarUrl}
        clickable={true}
      />
      <div className="reply-info-container">
        <div className="reply-user-container">
          <div className="reply-user">{comment.username}</div>
          <div className="reply-updated">
            {moment(comment.updated_at).fromNow()}
          </div>
        </div>
        {editable}
        <div className="reply-comments-likes-container">
          <CommentLikeContainer comment={comment} />
          <div onClick={() => toggleReply(true)} className="reply-button">
            REPLY
          </div>
        </div>
        {replyForm}
      </div>
    </div>
  );
}
