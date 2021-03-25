export const createLikeDislike = (type) => {
  return $.ajax({
    method: "post",
    url: "/api/likes",
    data: { type },
  });
};

export const destroyLikeDislike = (type) => {
  return $.ajax({
    method: "delete",
    url: "/api/likes",
    data: { type },
  });
};
