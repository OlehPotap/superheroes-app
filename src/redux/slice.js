import { createSlice } from "@reduxjs/toolkit";
import { getAllHeroes, addHero, updateHero, removeHero } from "./operations";
import Notiflix from "notiflix";

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
      Notiflix.Notify.success(`superhero ${action.payload.nickname} added`);
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addHero.rejected]: handleRejected,

    [removeHero.pending]: handlePending,
    [removeHero.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (hero) => hero._id === action.payload.data._id
      );
      state.items.splice(index, 1);
    },
    [removeHero.rejected]: handleRejected,
    [updateHero.pending]: handlePending,
    [updateHero.fulfilled](state, action) {
      // console.log(action.payload);
      state.isLoading = false;
      state.error = null;
      Notiflix.Notify.success(`superhero ${action.payload.nickname} updated`);
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (hero) => hero._id === action.payload._id
      );
      state.items.splice(index, 1, action.payload);
    },
    [updateHero.rejected]: handleRejected,
  },
});

export const heroesReducer = slice.reducer;
