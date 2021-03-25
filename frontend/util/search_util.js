export const queryDatabase = (queryString) => {
  return $.ajax({
    method: "get",
    url: "/api/search",
    data: { queryString },
  });
};
