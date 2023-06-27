import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  middlewares: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
