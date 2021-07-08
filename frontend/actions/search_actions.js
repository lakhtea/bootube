import { queryDatabase } from "../util/search_util";
import { receiveErrors } from "./errors_actions";
import { RECEIVE_SEARCH_RESULTS } from "./videos_actions";

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
