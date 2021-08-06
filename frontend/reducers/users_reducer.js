import { RECEIVE_SEARCH_RESULTS_USERS } from "../actions/search_actions";

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UsersReducer;
