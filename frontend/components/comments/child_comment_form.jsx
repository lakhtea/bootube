import React, { useState } from "react";

export default function ChildCommentForm({
  postComment,
  info,
  parentCommentId,
  handleClose,
}) {
  const [body, setBody] = useState("");

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postComment(info.video_id, {
      body,
      video_id: info.video_id,
      user_id: info.user_id,
      parent_comment_id: parentCommentId,
    }).then(() => setBody(""));
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        className="comment-field"
        value={body}
        onChange={updateBody}
        placeholder="Add a public reply..."
      ></textarea>
      <button className="comment-button">REPLY</button>
      <button
        onClick={() => handleClose()}
        className="cancel-button"
        type="button"
      >
        CANCEL
      </button>
    </form>
  );
}
