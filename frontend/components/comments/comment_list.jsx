import React from "react";
import CommentItem from "./comment_item";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="comment-list">
        <div className="comment-amount"></div>
        {this.props.comments.map((comment) => {
          <CommentItem key={comment.id} comment={comment} />;
        })}
      </ul>
    );
  }
}

export default CommentList;
