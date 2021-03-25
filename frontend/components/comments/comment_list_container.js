import { connect } from "react-redux";
import CommentList from "./comment_list";

const mstp = (state) => {
  return {
    comments: Object.values(state.comments),
  };
};

const mdtp = (dispatch) => {
  return {
    fetchComments: (videoId) => dispatch(fetchComments(videoId)),
  };
};

export default connect(mstp, mdtp)(CommentList);
