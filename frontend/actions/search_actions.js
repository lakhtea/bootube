import { queryDatabase } from "../util/search_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchedVideos = (videos) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    videos,
  };
};

export const onQuery = (queryString) => (dispatch) =>
  queryDatabase(queryString).then(
    (videos) => dispatch(receiveSearchedVideos(videos)),
    (err) => receiveErrors(err.responseJSON)
  );
