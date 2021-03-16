import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";

export default (preloadedState = {}) =>
  createStore(RootReducer, preloadedState);
