import { connect } from "react-redux";
import VideoIndex from "./videos_index";
import { fetchVideos } from "../../actions/videos_actions";

const mstp = (state) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mdtp = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default connect(mstp, mdtp)(VideoIndex);
