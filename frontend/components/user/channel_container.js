import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser } from "../../actions/user_actions";
import {
  fetchUserVideos,
  deleteVideo,
  updateVideo,
} from "../../actions/videos_actions";
import Channel from "./channel";

const mstp = (state, ownProps) => {
  return {
    sidebar: state.ui.sideBarToggled,
    user: state.entities.users,
    currentUser: state.session.currentUser,
    videos: Object.values(state.entities.videos),
    uploadModal: state.ui.uploadModal,
    currentChannel: ownProps.match.params.userId,
  };
};

const mdtp = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(getUser(userId)),
    fetchUserVideos: (userId) => dispatch(fetchUserVideos(userId)),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
    updateVideo: (formData, videoId) =>
      dispatch(updateVideo(formData, videoId)),
  };
};

export default withRouter(connect(mstp, mdtp)(Channel));
