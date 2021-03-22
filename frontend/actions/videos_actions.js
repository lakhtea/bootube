import {
  fetchVideos,
  fetchVideo,
  postVideo,
  deleteVideo,
} from "../util/video_util";
import { receiveErrors } from "../actions/errors_actions";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEOS";
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

const deleteVideo = (videoId) => {
  return {
    type: DELETE_VIDEO,
  };
};

export const fetchVideos = () => (dispatch) =>
  fetchVideos().then(
    (videos) => dispatch(receiveVideos(videos)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchVideo = (videoId) => (dispatch) =>
  fetchVideo(videoId).then(
    (video) => dispatch(receiveVideo(video)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const postVideo = (video) => (dispatch) =>
  postVideo(video).then(
    (video) => dispatch(receiveVideo(video)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteVideo = (videoId) => (dispatch) =>
  deleteVideo(videoId).then((video) => dispatch(deleteVideo(video.id)));
