import { fetchUser } from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const getUser = (userId) => (dispatch) =>
  fetchUser(userId).then(
    (user) => receiveUser(user),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
