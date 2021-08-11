export const TOGGLESIDEBAR = "TOGGLESIDEBAR";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

const sideBar = () => {
  return {
    type: TOGGLESIDEBAR,
  };
};

const toggleModal = (isVisible) => ({
  type: TOGGLE_MODAL,
  isVisible: isVisible,
});

export const toggleSideBar = () => (dispatch) => {
  dispatch(sideBar());
};

export const uploadModal = (isVisible) => (dispatch) => {
  dispatch(toggleModal(isVisible));
};
