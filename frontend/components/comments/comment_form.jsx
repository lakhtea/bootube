import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.form;

    this.inputRef = React.createRef();

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .postComment(this.state.video_id, this.state)
      .then(() => this.setState({ body: "" }));
  }

  render() {
    const commentField = this.props.currentUser ? (
      <textarea
        ref={this.inputRef}
        className="comment-field"
        value={this.state.body}
        onChange={this.updateBody}
        placeholder="Add a public comment..."
      ></textarea>
    ) : (
      <Link className="dummy-comment-field" to="/login">
        <textarea
          className="comment-field"
          placeholder="Add a public comment..."
        ></textarea>
      </Link>
    );

    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        {commentField}
        <button className="comment-button">COMMENT</button>
        <button className="cancel-button" type="button">
          CANCEL
        </button>
      </form>
    );
  }
}

export default CommentForm;
