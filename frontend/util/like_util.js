export const createLike = (type, id) => {
  return $.ajax({
    method: "post",
    url: "/api/likes",
    data: { type, id },
  });
};

export const destroyLike = (type, id) => {
  return $.ajax({
    method: "delete",
    url: "/api/likes",
    data: { type, id },
  });
};

export const createDislike = (type, id) => {
  return $.ajax({
    method: "post",
    url: "/api/dislikes",
    data: { type, id },
  });
};

export const destroyDislike = (type, id) => {
  return $.ajax({
    method: "delete",
    url: "/api/dislikes",
    data: { type, id },
  });
};
