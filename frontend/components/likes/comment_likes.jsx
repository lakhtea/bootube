import React, { useState } from "react";

export default function CommentLikes({
  comment,
  currentUser,
  like,
  unlike,
  history,
}) {
  const [liked, setLiked] = useState(comment.like[0]);
  const [likes, setLikes] = useState(comment.likes);

  const likeObj = {
    user_id: currentUser?.id,
    likeable_id: comment.id,
    likeable_type: "Comment",
    category: "Like",
  };

  const dislikeObj = {
    user_id: currentUser?.id,
    likeable_id: comment.id,
    likeable_type: "Comment",
    category: "Dislike",
  };

  const icons = liked
    ? liked.category === "Like"
      ? {
          like: "material-icons",
          dislike: "material-icons-outlined",
        }
      : {
          like: "material-icons-outlined",
          dislike: "material-icons",
        }
    : {
        like: "material-icons-outlined",
        dislike: "material-icons-outlined",
      };

  return (
    <div className="comment-likes-container">
      <div
        className="comment-like"
        onClick={() => {
          if (!currentUser) history.push("/login");
          if (liked && liked.category === "Dislike") {
            unlike(liked.id).then(() =>
              like(likeObj).then((like) => {
                setLiked(like.like);
                setLikes(likes + 1);
              })
            );
          } else if (liked && liked.category === "Like") {
            unlike(liked.id).then(() => {
              setLiked(null);
              setLikes(likes - 1);
            });
          } else {
            like(likeObj).then((like) => {
              setLiked(like.like);
              setLikes(likes + 1);
            });
          }
        }}
      >
        <span className={`${icons.like} comment-like-icon`}>thumb_up</span>
        <span className="comment-likes">{likes}</span>
      </div>

      <div
        className="comment-dislike"
        onClick={() => {
          if (!currentUser) history.push("/login");
          if (liked && liked.category === "Like") {
            unlike(liked.id).then(() =>
              like(dislikeObj).then((like) => {
                setLiked(like.like);
                setLikes(likes - 1);
              })
            );
          } else if (liked && liked.category === "Dislike") {
            unlike(liked.id).then(() => {
              setLiked(null);
            });
          } else {
            like(dislikeObj).then((like) => {
              setLiked(like.like);
            });
          }
        }}
      >
        <span className={`${icons.dislike} comment-dislike-icon`}>
          thumb_down
        </span>
      </div>
    </div>
  );
}
