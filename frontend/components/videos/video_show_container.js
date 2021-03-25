import { connect } from "react-redux";
import { fetchVideo } from "../../actions/videos_actions";
import VideoShow from "./video_show";

const mstp = (state, ownProps) => {
  if (Object.values(state.entities.videos)[0]) {
    return {
      video: Object.values(state.entities.videos)[0],
      videoId: ownProps.match.params.videoId,
      currentUser: state.session.currentUser,
      numOfComments: Object.values(state.entities.comments).length,
    };
  }
  return {
    videoId: ownProps.match.params.videoId,
    currentUser: state.session.currentUser,
    numOfComments: Object.values(state.entities.comments).length,
  };
};

const mdtp = (dispatch) => {
  return {
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  };
};

export default connect(mstp, mdtp)(VideoShow);
