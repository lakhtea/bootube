import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.form;

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.postComment(this.state);
  }

  render() {
    const commentField = this.props.currentUser ? (
      <div
        className="comment-field"
        contentEditable
        onChange={this.updateBody}
      />
    ) : (
      <Link className="dummy-comment-field" to="/login">
        <div className="comment-field" contentEditable></div>
      </Link>
    );

    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        {commentField}
        <button type="button">CANCEL</button>
        <button>COMMENT</button>
      </form>
    );
  }
}

export default CommentForm;
