import { createSession, postUser, deleteSession } from "../util/session_util";
import { receiveErrors } from "../actions/errors_actions";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const createUser = (user) => (dispatch) =>
  postUser(user).then(
    (user) => dispatch(loginUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  createSession(user).then(
    (user) => dispatch(loginUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  deleteSession().then(() => dispatch(logoutUser()));
