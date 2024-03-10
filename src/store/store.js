import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
// import userSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    data: rootReducer,
  },
});
