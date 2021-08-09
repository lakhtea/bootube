import { fetchUser } from "../util/user_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const getUser = (userId) => (dispatch) =>
  fetchUser(userId).then(
    (user) => dispatch(receiveUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
