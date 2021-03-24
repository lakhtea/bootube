import {
  getVideos,
  getVideo,
  createVideo,
  destroyVideo,
} from "../util/video_util";
import { receiveErrors } from "../actions/errors_actions";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";

const receiveVideos = (videos) => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};

const receiveVideo = (video) => {
  return {
    type: RECEIVE_VIDEO,
    video,
  };
};

const removeVideo = (videoId) => {
  return {
    type: DELETE_VIDEO,
    videoId,
  };
};

export const fetchVideos = () => (dispatch) =>
  getVideos().then(
    (videos) => dispatch(receiveVideos(videos)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchVideo = (videoId) => (dispatch) =>
  getVideo(videoId).then(
    (video) => dispatch(receiveVideo(video)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const postVideo = (formData) => (dispatch) =>
  createVideo(formData).then(
    (video) => dispatch(receiveVideo(video)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteVideo = (videoId) => (dispatch) =>
  destroyVideo(videoId).then((video) => dispatch(removeVideo(video.id)));