import { combineReducers } from "redux";

import authReducer from "./authReducers";
import blogReducer from "./blogReducers";

export const reducers = combineReducers({
  auth: authReducer,
  blogs: blogReducer
});