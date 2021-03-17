import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/errors_actions";

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      console.log(action.errors);
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
