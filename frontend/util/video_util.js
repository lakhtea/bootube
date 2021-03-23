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

export const createVideo = (formData) =>
  $.ajax({
    method: "post",
    url: "/api/videos",
    data: formData,
    contentType: false,
    processData: false,
  });

export const destroyVideo = (videoId) =>
  $.ajax({
    method: "delete",
    url: `/api/videos/${videoId}`,
  });
