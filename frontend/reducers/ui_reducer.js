import { TOGGLESIDEBAR } from "../actions/ui_actions";

const UIReducer = (state = { sideBarToggled: false }, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLESIDEBAR:
      console.log("poop");
      nextState.sideBarToggled = !nextState.sideBarToggled;
      return nextState;
    default:
      return state;
  }
};

export default UIReducer;
