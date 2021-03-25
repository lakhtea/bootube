import { connect } from "react-redux";
import CommentList from "./comment_list";
import { getComments } from "../../actions/comment_actions";

const mstp = ({ entities }) => {
  console.log(entities);
  if (Object.keys(entities.comments).length)
    return {
      comments: Object.values(entities.comments),
      videoId: Object.values(entities.videos)[0].id,
    };
  return {
    comments: [],
    videoId: Object.values(entities.videos)[0].id,
  };
};

const mdtp = (dispatch) => {
  return {
    fetchComments: (videoId) => dispatch(getComments(videoId)),
  };
};

export default connect(mstp, mdtp)(CommentList);
