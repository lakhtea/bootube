import { combineReducers } from "redux";
import VideosReducer from "../reducers/videos_reducer";

const RootReducer = combineReducers({ videos: VideosReducer });

export default RootReducer;
