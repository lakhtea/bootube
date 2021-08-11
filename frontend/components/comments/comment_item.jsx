import React from "react";
import moment from "moment";
import Avatar from "../user/avatar";

class CommentItem extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <div key={comment.id} className="comment">
        <div className="comment-info">
          <Avatar
            id={comment.user_id}
            username={comment.username}
            avatar={comment.avatarUrl}
            clickable={true}
          />
          <div className="comment-user">{comment.username}</div>
          <div className="updated">{moment(comment.updated_at).fromNow()}</div>
        </div>
        <div className="comment-body">{comment.body}</div>
      </div>
    );
  }
}

export default CommentItem;
