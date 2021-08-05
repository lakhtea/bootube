export const TOGGLESIDEBAR = "TOGGLESIDEBAR";

const sideBar = () => {
  return {
    type: TOGGLESIDEBAR,
  };
};

export const toggleSideBar = () => (dispatch) => {
  dispatch(sideBar());
};
