import { connect } from "react-redux";
import { fetchVideo, deleteCurrentVideo } from "../../actions/videos_actions";
import { postLike, deleteLike } from "../../actions/like_actions";
import VideoShow from "./video_show";

const mstp = (state, ownProps) => {
  if (state.entities.videos.currentVideo) {
    return {
      video: state.entities.videos.currentVideo,
      videoId: ownProps.match.params.videoId,
      currentUser: state.session.currentUser,
      numOfComments: Object.values(state.entities.comments).length,
      uploadModal: state.ui.uploadModal,
      sidebar: state.ui.sideBarToggled,
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
    deleteCurrentVideo: () => dispatch(deleteCurrentVideo()),
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    like: (like) => dispatch(postLike(like)),
    unlike: (like) => dispatch(deleteLike(like)),
  };
};

export default connect(mstp, mdtp)(VideoShow);
