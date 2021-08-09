import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEOS_SHOW,
  RECEIVE_VIDEO,
  DELETE_VIDEO,
  DELETE_CURRENT_VIDEO,
} from "../actions/videos_actions";

import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

import { RECEIVE_LIKE } from "../actions/like_actions";

const VideosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  const newState = {};
  switch (action.type) {
    case RECEIVE_VIDEOS:
      // for (let i = 0; i < action.videos.length; i++) {
      //   newState[action.videos[i].id] = action.videos[i];
      // }
      // return newState;
      return action.videos;

    case RECEIVE_VIDEOS_SHOW:
      for (let i = 0; i < action.videos.length; i++) {
        nextState[action.videos[i].id] = action.videos[i];
      }
      return nextState;

    case RECEIVE_VIDEO:
      nextState.currentVideo = action.video;
      return nextState;

    case RECEIVE_SEARCH_RESULTS:
      return action.videos;

    case RECEIVE_LIKE:
      if (action.like) nextState.currentVideo.like = [action.like];
      return nextState;

    case DELETE_CURRENT_VIDEO:
      delete nextState.currentVideo;
      return nextState;

    case DELETE_VIDEO:
      delete nextState[action.videoId];
      return nextState;

    default:
      return state;
  }
};

export default VideosReducer;
