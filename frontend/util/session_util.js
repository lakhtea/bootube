export const postUser = (user) => {
  return $.ajax({
    method: "post",
    url: "/api/users",
    data: { user },
  });
};

export const checkValidUser = (username) => {
  return $.ajax({
    method: "get",
    url: `/api/validation/${username}`,
  });
};

export const createSession = (user) => {
  return $.ajax({
    method: "post",
    url: "/api/session",
    data: { user },
  });
};

export const deleteSession = () => {
  return $.ajax({
    method: "delete",
    url: "/api/session",
  });
};
