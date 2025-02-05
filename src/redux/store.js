import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import friendsReducer from "./friends/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    friends: friendsReducer,
  },
});
