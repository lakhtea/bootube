export const getVideos = () =>
  $.ajax({
    method: "get",
    url: "/api/videos",
  });

export const getVideo = (videoId) =>
  $.ajax({
    method: "get",
    url: `/api/videos/${videoId}`,
  });

export const createVideo = (video) =>
  $.ajax({
    method: "post",
    url: "/api/videos",
    data: { video },
  });

export const destroyVideo = (videoId) =>
  $.ajax({
    method: "delete",
    url: `/api/videos/${videoId}`,
  });
