import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser } from "../../actions/user_actions";
import Channel from "./channel";

const mstp = (state) => {
  return { sidebar: state.ui.sideBarToggled, user: state.users };
};

const mdtp = (dispatch) => {
  return { fetchUser: (userId) => dispatch(getUser(userId)) };
};

export default withRouter(connect(mstp, mdtp)(Channel));
