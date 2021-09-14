import { fetchTrending } from "../util/video_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_TRENDING = "RECEIVE_TRENDING";

const receiveTrending = (videos) => {
  return {
    type: RECEIVE_TRENDING,
    videos,
  };
};

export const getTrending = () => (dispatch) => {
  return fetchTrending().then(
    (videos) => dispatch(receiveTrending(videos)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};
