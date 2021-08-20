import {
  fetchComments,
  postComment,
  destroyComment,
  patchComment,
} from "../util/comment_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

const removeComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};

export const getComments = (videoId) => (dispatch) =>
  fetchComments(videoId).then(
    (comments) => dispatch(receiveComments(comments)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const addComment = (videoId, comment) => (dispatch) =>
  postComment(videoId, comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteComment = (commentId) => (dispatch) =>
  destroyComment(commentId).then((comment) =>
    dispatch(removeComment(comment.id))
  );

export const editComment = (comment) => (dispatch) =>
  patchComment(comment).then((comment) => dispatch(receiveComment(comment)));
