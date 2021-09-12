import React from "react";
import moment from "moment";
import Avatar from "../user/avatar";
import onClickOutside from "react-onclickoutside";
import EditCommentForm from "./edit_comment_form";
import CommentLikeContainer from "../likes/comment_like_container";
import ChildCommentFormContainer from "./child_comment_form_container";
import ChildCommentsContainer from "./child_comment_container";
import { withRouter } from "react-router";

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      menuToggled: false,
      editComment: false,
      deleteComment: false,
      replyFormToggled: false,
      repliesToggled: false,
    };

    this.handleCloseEdit = this.handleCloseEdit.bind(this);
    this.handleCloseReply = this.handleCloseReply.bind(this);
  }

  handleClickOutside() {
    if (this.state.menuToggled) this.setState({ menuToggled: false });
  }

  handleCloseEdit() {
    this.setState({ editComment: false, menuToggled: false });
  }

  handleCloseReply() {
    this.setState({ replyFormToggled: false });
  }

  render() {
    const { comment, currentUser, editComment, deleteComment, history } =
      this.props;

    const replyAction = this.state.repliesToggled ? "Hide" : "View";
    const viewReplies =
      comment.replies.length > 0
        ? comment.replies.length === 1
          ? `${replyAction} reply`
          : `${replyAction} ${comment.replies.length} replies`
        : null;
    const childCommentsContainer = this.state.repliesToggled && (
      <ChildCommentsContainer replies={comment.replies} />
    );

    const replyForm = this.state.replyFormToggled ? (
      <ChildCommentFormContainer
        handleClose={this.handleCloseReply}
        parentCommentId={comment.id}
      />
    ) : null;
    const deleteCommentModal = this.state.deleteComment ? (
      <div className="delete-video-modal-background">
        <div className="delete-video-modal">
          <h1 className="delete-verification-message">
            Delete comment permanently?
          </h1>
          <div className="buttons">
            <button
              onClick={() => {
                deleteComment(comment.id);
                this.setState({ deleteComment: false, menuToggled: false });
              }}
              className="delete-video-button"
            >
              Delete
            </button>
            <button
              onClick={() =>
                this.setState({ deleteComment: false, menuToggled: false })
              }
              className="cancel-delete-video-button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    ) : null;
    const menu =
      this.state.hover && comment.user_id === currentUser?.id ? (
        <div
          onMouseOver={() => this.setState({ hover: true })}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ menuToggled: !this.state.menuToggled });
          }}
          className="more-vert"
        >
          <span className="material-icons">more_vert</span>
        </div>
      ) : null;
    const expandedMenu = this.state.menuToggled && (
      <div className="expanded-menu">
        <div
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ deleteComment: true, menuToggled: false });
          }}
          className="delete-video"
        >
          <span className="material-icons">delete</span> Delete Comment
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ editComment: true, menuToggled: false });
          }}
          className="edit-video"
        >
          <span className="material-icons">edit</span> Edit Comment
        </div>
      </div>
    );
    const editable = this.state.editComment ? (
      <EditCommentForm
        handleCloseEdit={this.handleCloseEdit}
        editComment={editComment}
        currentUser={currentUser}
        comment={comment}
      />
    ) : (
      <div className="comment-body">{comment.body}</div>
    );
    return (
      <div
        onMouseOver={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        key={comment.id}
        className="comment"
      >
        <Avatar
          id={comment.user_id}
          username={comment.username}
          avatar={comment.avatarUrl}
          clickable={true}
        />
        <div className="comment-info-container">
          <div className="comment-info">
            <div className="comment-user">{comment.username}</div>
            <div className="updated">
              {moment(comment.updated_at).fromNow()}
            </div>
          </div>
          {editable}
          <div className="likes-reply">
            <CommentLikeContainer comment={comment} />
            <div
              onClick={() => {
                if (!currentUser) history.push("/login");
                this.setState({ replyFormToggled: true });
              }}
              className="reply-button"
            >
              REPLY
            </div>
          </div>

          {replyForm}
          <div
            onClick={() =>
              this.setState({ repliesToggled: !this.state.repliesToggled })
            }
            className="view-replies"
          >
            {viewReplies ? (
              <span className="material-icons">arrow_drop_down</span>
            ) : null}
            {viewReplies}
          </div>
          {childCommentsContainer}
        </div>
        {menu}
        {expandedMenu}
        {deleteCommentModal}
      </div>
    );
  }
}

export default withRouter(onClickOutside(CommentItem));
