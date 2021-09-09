import { connect } from "react-redux";
import ChildComments from "./child_comments";

const mstp = (state, { commentId }) => {
  return {
    replies: [...state.entities.comments[commentId].replies],
  };
};

const mdtp = (dispatch) => {
  return {};
};

export default connect(mstp, null)(ChildComments);
