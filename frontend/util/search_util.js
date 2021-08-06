export const queryDatabase = (queryString) => {
  return $.ajax({
    method: "get",
    url: "/api/search",
    data: { queryString },
  });
};

export const queryUsers = (queryString) => {
  return $.ajax({
    method: "get",
    url: "/api/search_users",
    data: { queryString },
  });
};
