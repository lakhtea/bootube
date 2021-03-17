import { LOGIN_USER, LOGOUT_USER } from "../actions/session_actions";

const _nullSession = {
  currentUser: null,
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default SessionReducer;
