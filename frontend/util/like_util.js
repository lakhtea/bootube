export const createLike = (like) => {
  return $.ajax({
    method: "post",
    url: "/api/likes",
    data: { like },
  });
};

export const destroyLike = (like) => {
  return $.ajax({
    method: "delete",
    url: `/api/likes/${like.id}`,
  });
};
