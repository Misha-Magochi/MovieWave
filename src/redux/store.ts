import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageMoviesSlice from "./features/movies/moviesSlice";

const rootReducer = combineReducers({
  homePageMovies: homePageMoviesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
