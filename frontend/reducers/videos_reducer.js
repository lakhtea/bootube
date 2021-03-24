import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO,
  DELETE_VIDEO,
} from "../actions/videos_actions";

const VideosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  const newState = {};
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      newState[action.video.id] = action.video;
      return newState;
    case DELETE_VIDEO:
      delete nextState[action.videoId];
      return nextState;
    default:
      return state;
  }
};

export default VideosReducer;
