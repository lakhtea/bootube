import { combineReducers } from "redux";
import VideosReducer from "./videos_reducer";
import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors_reducer";

const RootReducer = combineReducers({
  videos: VideosReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
});

export default RootReducer;
