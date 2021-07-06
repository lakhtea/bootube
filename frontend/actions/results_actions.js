import { queryDatabase } from "../util/search_util";
import { receiveErrors } from "./errors_actions";

const RECEIVE_RESULTS = "RECEIVE_RESULTS";

const receiveResults = (results) => {
  return {
    type: RECEIVE_RESULTS,
    results,
  };
};

export const onQuery = (queryString) => (dispatch) =>
  queryDatabase(queryString).then(
    (videos) => dispatch(receiveSearchedVideos(videos)),
    (err) => receiveErrors(err.responseJSON)
  );
