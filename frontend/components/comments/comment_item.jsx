import React from "react";

class CommentItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.comment.commenter}
        {this.props.comment.updated_at}
        {this.props.comment.body}
      </li>
    );
  }
}

export default CommentItem;
