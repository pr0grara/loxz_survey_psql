import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import resultsReducer from "./results_reducer";
import surveysReducer from "./surveys_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  results: resultsReducer,
  surveys: surveysReducer,
});

export default entitiesReducer;
