import { connect } from "react-redux";
import CommentLikes from "./comment_likes";
import { withRouter } from "react-router";
import { deleteLike, postLike } from "../../actions/like_actions";

const mstp = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mdtp = (dispatch) => {
  return {
    like: (like) => dispatch(postLike(like)),
    unlike: (likeId) => dispatch(deleteLike(likeId)),
  };
};

export default withRouter(connect(mstp, mdtp)(CommentLikes));
