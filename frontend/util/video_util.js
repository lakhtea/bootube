export const fetchVideos = () =>
  $.ajax({
    method: "get",
    url: "/api/videos",
  });
