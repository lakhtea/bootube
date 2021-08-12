import { connect } from "react-redux";
import CommentList from "./comment_list";
import { getComments } from "../../actions/comment_actions";
import { withRouter } from "react-router";

const mstp = ({ entities, session }) => {
  if (Object.keys(entities.comments).length)
    return {
      comments: Object.values(entities.comments),
      videoId: entities.videos.currentVideo.id,
      currentUser: session.currentUser,
    };
  return {
    comments: [],
    videoId: entities.videos.currentVideo.id,
    currentUser: session.currentUser,
  };
};

const mdtp = (dispatch) => {
  return {
    fetchComments: (videoId) => dispatch(getComments(videoId)),
  };
};

export default withRouter(connect(mstp, mdtp)(CommentList));
