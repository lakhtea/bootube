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
    this.setState({ body: e.target.innerHTML });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .postComment(this.state.video_id, this.state)
      .then(() => this.setState(this.props.form));
  }

  render() {
    const commentField = this.props.currentUser ? (
      <div
        className="comment-field"
        contentEditable
        onInput={this.updateBody}
        placeholder="Add a public comment..."
      ></div>
    ) : (
      <Link className="dummy-comment-field" to="/login">
        <div className="comment-field" contentEditable></div>
      </Link>
    );

    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        {commentField}
        <button className="cancel-button" type="button">
          CANCEL
        </button>
        <button className="comment-button">COMMENT</button>
      </form>
    );
  }
}

export default CommentForm;
