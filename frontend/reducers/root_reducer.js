import { combineReducers } from "redux";
import VideosReducer from "./videos_reducer";
import SessionReducer from "./session_reducer";

const RootReducer = combineReducers({
  videos: VideosReducer,
  session: SessionReducer,
});

export default RootReducer;
