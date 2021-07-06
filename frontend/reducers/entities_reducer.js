import { combineReducers } from "redux";
import VideosReducer from "./videos_reducer";
import CommentsReducer from "./comments_reducer";
import UsersReducer from "./users_reducer";
import ResultsReducer from "./results_reducer";

const EntitiesReducer = combineReducers({
  videos: VideosReducer,
  comments: CommentsReducer,
  users: UsersReducer,
  results: ResultsReducer,
});

export default EntitiesReducer;
