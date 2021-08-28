import {
  DELETE_COMMENT,
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_CHILD_COMMENTS,
} from "../actions/comment_actions";

import { RECEIVE_LIKE } from "../actions/like_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case RECEIVE_CHILD_COMMENTS:
      const comments = Object.values(action.comments);
      nextState[comments[0].parent_comment_id]["child_comments"] =
        action.comments;
      return nextState;
    case DELETE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
};

export default CommentsReducer;
