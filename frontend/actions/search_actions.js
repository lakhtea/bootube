import { queryDatabase, queryUsers } from "../util/search_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_RESULTS_USERS = "RECEIVE_SEARCH_RESULTS_USERS";

const receiveSearchResults = (videos) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    videos,
  };
};

const receiveSearchResultsUsers = (users) => {
  return {
    type: RECEIVE_SEARCH_RESULTS_USERS,
    users,
  };
};

export const onQuery = (queryString) => (dispatch) =>
  queryDatabase(queryString).then(
    (videos) => dispatch(receiveSearchResults(videos)),
    (err) => receiveErrors(err.responseJSON)
  );

export const query = (queryString) => (dispatch) =>
  queryUsers(queryString).then(
    (users) => dispatch(receiveSearchResultsUsers(users)),
    (err) => receiveErrors(err.responseJSON)
  );
