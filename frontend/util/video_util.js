export const fetchVideos = () =>
  $.ajax({
    method: "get",
    url: "/api/videos",
  });

export const fetchVideo = (videoId) =>
  $.ajax({
    method: "get",
    url: `/api/videos/${videoId}`,
  });

export const postVideo = (video) =>
  $.ajax({
    method: "post",
    url: "/api/videos",
    data: { video },
  });

export const deleteVideo = (videoId) =>
  $.ajax({
    method: "delete",
    url: `/api/videos/${videoId}`,
  });
