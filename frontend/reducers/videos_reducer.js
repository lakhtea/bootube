import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO,
  DELETE_VIDEO,
} from "../actions/videos_actions";

const VideosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      action.video;
      nextState[action.video.id] = action.video;
      return nextState;
    case DELETE_VIDEO:
      delete nextState[action.videoId];
      return nextState;
    default:
      return state;
  }
};

export default VideosReducer;
