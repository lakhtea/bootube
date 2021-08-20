import { connect } from "react-redux";
import { addComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mstp = ({ entities, session }) => {
  return session.currentUser
    ? {
        info: {
          video_id: entities.videos.currentVideo.id,
          user_id: session.currentUser.id,
        },
      }
    : {};
};

const mdtp = (dispatch) => {
  return {
    postComment: (videoId, comment) => dispatch(addComment(videoId, comment)),
  };
};

export default connect(mstp, mdtp)(CommentForm);
