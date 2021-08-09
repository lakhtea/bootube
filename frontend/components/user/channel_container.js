import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser } from "../../actions/user_actions";
import { getUserVideos } from "../../actions/videos_actions";
import Channel from "./channel";

const mstp = (state) => {
  return {
    sidebar: state.ui.sideBarToggled,
    username: state.entities.users.username,
  };
};

const mdtp = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(getUser(userId)),
    fetchUserVideos: (userId) => dispatch(fetchUserVideos(userId)),
  };
};

export default withRouter(connect(mstp, mdtp)(Channel));
