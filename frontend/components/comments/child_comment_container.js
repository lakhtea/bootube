import { connect } from "react-redux";
import { withRouter } from "react-router";
import ChildComments from "./child_comments";

const mstp = (state) => {
  return {};
};

const mdtp = (dispatch) => {
  return {};
};

export default withRouter(connect(mstp, mdtp)(ChildComments));
