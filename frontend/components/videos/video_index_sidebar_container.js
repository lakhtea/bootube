import { connect } from "react-redux";
import VideoIndexSidebar from "./video_index_sidebar";
import { fetchVideosShow } from "../../actions/videos_actions";

const mstp = (state) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mdtp = (dispatch) => {
  return {
    fetchVideosShow: () => dispatch(fetchVideosShow()),
  };
};

export default connect(mstp, mdtp)(VideoIndexSidebar);
