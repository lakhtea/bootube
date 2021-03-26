import React from "react";
import moment from "moment";
import UserLink from "../user/user_link";

class CommentItem extends React.Component {
  render() {
    return (
      <div key={this.props.comment.id} className="comment">
        <div className="comment-info">
          <UserLink currentUser={this.props.currentUser} />
          <div className="comment-user">{this.props.comment.username}</div>
          <div className="updated">
            {moment(this.props.comment.updated_at).fromNow()}
          </div>
        </div>
        <div className="comment-body">{this.props.comment.body}</div>
      </div>
    );
  }
}

export default CommentItem;
