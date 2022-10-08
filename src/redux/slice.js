import { createSlice } from "@reduxjs/toolkit";
import { getAllHeroes, addHero, updateHero, removeHero } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "heroes",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getAllHeroes.pending]: handlePending,
    [getAllHeroes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getAllHeroes.rejected]: handleRejected,

    [addHero.pending]: handlePending,
    [addHero.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addHero.rejected]: handleRejected,

    [removeHero.pending]: handlePending,
    [removeHero.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex((task) => task.id === action.payload);
      state.items.splice(index, 1);
    },
    [removeHero.rejected]: handleRejected,
    [updateHero.pending]: handlePending,
    [updateHero.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [updateHero.rejected]: handleRejected,
  },
});

export const heroesReducer = slice.reducer;
