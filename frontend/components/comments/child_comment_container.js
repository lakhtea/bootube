import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editComment } from "../../actions/comment_actions";
import ChildComments from "./child_comments";

const mstp = (state, { replies }) => {
  return {
    currentUser: !!state.session.currentUser,
    replies: [...replies],
  };
};

const mdtp = (dispatch) => {
  return {
    editComment: (comment) => dispatch(editComment(comment)),
  };
};

export default withRouter(connect(mstp, null)(ChildComments));
