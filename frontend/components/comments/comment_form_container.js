import { connect } from "react-redux";
import { addComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mstp = ({ entities, session }) => {
  return session.currentUser
    ? {
        form: {
          body: "",
          video_id: Object.values(entities.videos)[0].id,
          user_id: session.currentUser.id,
        },
      }
    : {};
};

const mdtp = (dispatch) => {
  return {
    postComment: (comment) => dispatch(addComment(comment)),
  };
};

export default connect(mstp, mdtp)(CommentForm);
