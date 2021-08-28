import { connect } from "react-redux";
import CommentLikes from "./comment_likes";
import { withRouter } from "react-router";

const mstp = (state) => {
  return {};
};

export default withRouter(connect(mstp, null)(CommentLikes));
