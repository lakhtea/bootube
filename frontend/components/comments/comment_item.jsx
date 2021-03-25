import React from "react";
import moment from "moment";

class CommentItem extends React.Component {
  render() {
    console.log(this.props.comment);
    return (
      <div key={this.props.comment.id} className="comment">
        <div className="comment-info">
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
