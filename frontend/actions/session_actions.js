import {
  createSession,
  postUser,
  deleteSession,
  checkValidUser,
} from "../util/session_util";
import { receiveErrors } from "../actions/errors_actions";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SEND_USERNAME = "SEND_USERNAME";

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

const sendUsername = (user) => {
  return {
    type: SEND_USERNAME,
    user,
  };
};

export const createUser = (user) => (dispatch) =>
  postUser(user).then(
    (user) => dispatch(loginUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const validUser = (username) => (dispatch) =>
  checkValidUser(username).then(
    (user) => dispatch(sendUsername(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  createSession(user).then(
    (user) => dispatch(loginUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  deleteSession().then(() => dispatch(logoutUser()));
