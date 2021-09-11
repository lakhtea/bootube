import { connect } from "react-redux";
import { editComment } from "../../actions/comment_actions";
import ChildComments from "./child_comments";

const mstp = (state, { replies }) => {
  return {
    replies: [...replies],
  };
};

const mdtp = (dispatch) => {
  return {
    editComment: (comment) => dispatch(editComment(comment)),
  };
};

export default connect(mstp, null)(ChildComments);
