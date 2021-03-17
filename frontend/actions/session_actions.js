import { createSession, postUser, deleteSession } from "../util/session_util";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

const logoutUser = (user) => {
  return {
    type: LOGOUT_USER,
  };
};

export const createUser = (user) => (dispatch) =>
  postUser(user).then((user) => dispatch(loginUser(user)));

export const login = (user) => (dispatch) =>
  createSession(user).then((user) => dispatch(loginUser(user)));

export const logout = () => (dispatch) =>
  deleteSession().then(() => dispatch(logoutUser()));
