import { connect } from "react-redux";
import { withRouter } from "react-router";
import Channel from "./channel";

const mstp = (state) => {
  return {};
};

const mdtp = (dispatch) => {
  return {};
};

export default withRouter(connect(mstp, mdtp)(Channel));
