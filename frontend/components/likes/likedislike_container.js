import { connect } from "react-redux";
import LikeDislike from "./likedislike";
import { withRouter } from "react-router";

const mstp = (state) => {
  return {
    liked: state.entities.videos.currentVideo.like?.[0],
  };
};

export default withRouter(connect(mstp, null)(LikeDislike));
