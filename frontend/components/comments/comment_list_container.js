import { connect } from "react-redux";
import CommentList from "./comment_list";
import { getComments } from "../../actions/comment_actions";

const mstp = ({ entities, session }) => {
  if (Object.keys(entities.comments).length)
    return {
      comments: Object.values(entities.comments),
      videoId: Object.values(entities.videos)[0].id,
      currentUser: session.currentUser,
    };
  return {
    comments: [],
    videoId: Object.values(entities.videos)[0].id,
    currentUser: session.currentUser,
  };
};

const mdtp = (dispatch) => {
  return {
    fetchComments: (videoId) => dispatch(getComments(videoId)),
  };
};

export default connect(mstp, mdtp)(CommentList);
