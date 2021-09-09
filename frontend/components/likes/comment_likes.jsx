import React from "react";

export default function CommentLikes() {
  return (
    <div className="comment-likes-container">
      <div className="comment-like">
        <span className="material-icons-outlined comment-like-icon">
          thumb_up
        </span>
        <span className="comment-likes">56</span>
      </div>

      <div className="comment-dislike">
        <span className="material-icons-outlined comment-dislike-icon">
          thumb_down
        </span>
      </div>
    </div>
  );
}
