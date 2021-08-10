import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser } from "../../actions/user_actions";
import { fetchUserVideos } from "../../actions/videos_actions";
import Channel from "./channel";

const mstp = (state) => {
  return {
    sidebar: state.ui.sideBarToggled,
    user: state.entities.users,
    currentUser: state.session.currentUser,
    videos: state.entities.videos,
  };
};

const mdtp = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(getUser(userId)),
    fetchUserVideos: (userId) => dispatch(fetchUserVideos(userId)),
  };
};

export default withRouter(connect(mstp, mdtp)(Channel));
