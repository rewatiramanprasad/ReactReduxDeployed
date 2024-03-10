import { combineReducers } from "redux";
import {userSlice} from "./UserSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
