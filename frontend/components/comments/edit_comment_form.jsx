import React from "react";

class EditCommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: this.props.comment.body, open: true };

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newComment = this.props.comment;
    newComment.body = this.state.body;

    this.props.editComment(newComment).then(() => this.props.handleCloseEdit());
  }

  render() {
    const { comment, editComment, currentUser, handleCloseEdit } = this.props;

    const commentField = (
      <textarea
        className="editable comment-field"
        value={this.state.body}
        onChange={this.updateBody}
        placeholder="Your edited comment..."
        onClick={() => this.setState({ open: true })}
      ></textarea>
    );

    const openForm = this.state.open ? (
      <form onSubmit={this.handleSubmit} className="edit-comment-form">
        {commentField}
        <button className="comment-button">COMMENT</button>
        <button
          onClick={() => {
            handleCloseEdit();
            this.setState({ open: false });
          }}
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

export default EditCommentForm;
