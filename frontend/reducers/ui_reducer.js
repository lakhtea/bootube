import { TOGGLESIDEBAR, TOGGLE_MODAL } from "../actions/ui_actions";

const UIReducer = (
  state = { sideBarToggled: false, uploadModal: false },
  action
) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLESIDEBAR:
      nextState.sideBarToggled = !nextState.sideBarToggled;
      return nextState;
    case TOGGLE_MODAL:
      nextState.uploadModal = action.isVisible;
      return nextState;
    default:
      return state;
  }
};

export default UIReducer;
