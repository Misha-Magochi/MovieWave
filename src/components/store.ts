import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderSlice from './reducers/sliceSlider';

const rootReducer = combineReducers ( {
  sliderSlice
})



export const store = configureStore({
  reducer: rootReducer,
  
});



export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

