import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import axiosinstans from "../../../lib/axios";

export const fetchHomePageMovies = createAsyncThunk("home/movies", async () => {
  const response = await axiosinstans.get("/api/home-page");
  return response.data;
});

export const homePageMoviesSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomePageMovies.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchHomePageMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.movies = action.payload;
    });
    builder.addCase(fetchHomePageMovies.rejected, (state) => {
      state.loading = false;
      state.error = "Error occured while trying to fetch home page movies";
      state.movies = [];
    });
  },
});

export default homePageMoviesSlice.reducer;
