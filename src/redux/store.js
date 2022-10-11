import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer } from "./slice";

const store = configureStore({
  reducer: heroesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
