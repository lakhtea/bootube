import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser } from "../../actions/user_actions";
import { fetchUserVideos, deleteVideo } from "../../actions/videos_actions";
import Channel from "./channel";

const mstp = (state) => {
  return {
    sidebar: state.ui.sideBarToggled,
    user: state.entities.users,
    currentUser: state.session.currentUser,
    videos: Object.values(state.entities.videos),
  };
};

const mdtp = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(getUser(userId)),
    fetchUserVideos: (userId) => dispatch(fetchUserVideos(userId)),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  };
};

export default withRouter(connect(mstp, mdtp)(Channel));
