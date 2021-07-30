import { createLike, destroyLike } from "../util/like_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

export const postLike = (like) => (dispatch) => {
  return createLike(like).then(
    (like) => dispatch(receiveLike(like)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteLike = (like) => (dispatch) => {
  return destroyLike(like).then(receiveLike(like), (err) =>
    dispatch(receiveErrors(err.responseJSON))
  );
};
