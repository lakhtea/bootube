import { connect } from "react-redux";
import LikeDislike from "./likedislike";

const mstp = (state) => {
  return {
    liked: state.entities.videos.currentVideo.like?.[0],
  };
};

export default connect(mstp, null)(LikeDislike);
