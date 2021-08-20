import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: "", open: false };

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
      .postComment(this.props.info.video_id, {
        body: this.state.body,
        video_id: this.props.info.video_id,
        user_id: this.props.info.user_id,
      })
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
        onClick={() => this.setState({ open: true })}
      ></textarea>
    ) : (
      <Link className="dummy-comment-field" to="/login">
        <textarea
          className="comment-field"
          placeholder="Add a public comment..."
        ></textarea>
      </Link>
    );

    const openForm = this.state.open ? (
      <form onSubmit={this.handleSubmit} className="comment-form">
        {commentField}
        <button className="comment-button">COMMENT</button>
        <button
          onClick={() => this.setState({ open: false })}
          className="cancel-button"
          type="button"
        >
          CANCEL
        </button>
      </form>
    ) : (
      <form onSubmit={this.handleSubmit} className="comment-form">
        {commentField}
      </form>
    );

    return openForm;
  }
}

export default CommentForm;
