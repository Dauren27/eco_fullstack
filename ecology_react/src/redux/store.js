import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./reducers/authApi";
import authSlice from "./reducers/authSlice";
import { userApi } from "./reducers/userApi";
import { eventApi } from "./reducers/eventApi";
import { newsApi } from "./reducers/newsApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware()
      .concat(eventApi.middleware)
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(newsApi.middleware),
});
