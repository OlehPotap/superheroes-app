import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getAllHeroes = createAsyncThunk(
  "heroes/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addHero = createAsyncThunk(
  "heroes/add",
  async (hero, thunkAPI) => {
    try {
      const { data } = await axios.post("/", hero);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  "heroes/update",
  async (newHero, thunkAPI) => {
    try {
      console.log(newHero);
      const { data } = await axios.patch(`/${newHero.id}`, newHero);
      return data;
    } catch (e) {}
  }
);

export const removeHero = createAsyncThunk(
  "heroes/remove",
  async (id, thunkAPI) => {
    try {
      const data = await axios.delete(`/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
