import {
  fetchComments,
  postComment,
  destroyComment,
  patchComment,
  fetchChildComments,
} from "../util/comment_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_CHILD_COMMENTS = "RECEIVE_CHILD_COMMENTS";
export const RECEIVE_CHILD_COMMENT = "RECEIVE_CHILD_COMMENT";

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

const receiveChildComments = (comments) => {
  return {
    type: RECEIVE_CHILD_COMMENTS,
    comments,
  };
};

const receiveChildComment = (comment) => {
  return {
    type: RECEIVE_CHILD_COMMENT,
    comment,
  };
};

export const getComments = (videoId) => (dispatch) =>
  fetchComments(videoId).then(
    (comments) => dispatch(receiveComments(comments)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const addComment = (videoId, comment) => (dispatch) => {
  if (comment.parent_comment_id) {
    return postComment(videoId, comment).then(
      (comment) => dispatch(receiveChildComment(comment)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  } else {
    return postComment(videoId, comment).then(
      (comment) => dispatch(receiveComment(comment)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  }
};

export const deleteComment = (commentId) => (dispatch) =>
  destroyComment(commentId).then((comment) =>
    dispatch(removeComment(comment.id))
  );

export const editComment = (comment) => (dispatch) =>
  patchComment(comment).then((comment) => dispatch(receiveComment(comment)));

export const getChildComments = (commentId) => (dispatch) =>
  fetchChildComments(commentId).then((comments) =>
    dispatch(receiveChildComments(comments))
  );
