export const fetchComments = (videoId) => {
  return $.ajax({
    method: "get",
    url: `/api/videos/${videoId}/comments`,
  });
};

export const postComment = (videoId, comment) => {
  return $.ajax({
    method: "post",
    url: `/api/videos/${videoId}/comments`,
    data: { comment },
  });
};

export const patchComment = (comment) => {
  return $.ajax({
    method: "patch",
    url: `/api/comments/${comment.id}`,
    data: { comment },
  });
};

export const destroyComment = (commentId) => {
  return $.ajax({
    method: "delete",
    url: `/api/comments/${commentId}`,
  });
};
