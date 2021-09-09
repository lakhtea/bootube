import { connect } from "react-redux";
import ChildComments from "./child_comments";

const mstp = (state, { replies }) => {
  return {
    replies: [...replies],
  };
};

const mdtp = (dispatch) => {
  return {};
};

export default connect(mstp, null)(ChildComments);
