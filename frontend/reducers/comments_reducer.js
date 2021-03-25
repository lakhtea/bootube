import {
  DELETE_COMMENT,
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
} from "../actions/comment_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      console.log(action);
      return action.comments;
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case DELETE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
};

export default CommentsReducer;
