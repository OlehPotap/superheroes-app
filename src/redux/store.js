import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer } from "./slice";

const store = configureStore({
  reducer: heroesReducer,
});

export default store;
