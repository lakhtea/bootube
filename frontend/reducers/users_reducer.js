import { RECEIVE_SEARCH_RESULTS_USERS } from "../actions/search_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS_USERS:
      return action.users;
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UsersReducer;
