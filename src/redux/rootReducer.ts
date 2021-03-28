import { combineReducers } from "redux";
import { authReducer } from "_modules/auth/redux";

export const rootReducer = combineReducers({
  auth: authReducer,
});
