import { configureStore } from "@reduxjs/toolkit";
import stickyFooterReducer from "";
import popupSlice from "";
import personalProfileSlice from "";
import leaveReviewSlice from "";
import adminSlice from "";
import createListingSlice from "";
import searchSlice from "";
import listingSlice from "";
import compareBanksSlice from "";

export const store = configureStore({
  reducer: {
    stickyFooters: stickyFooterReducer,
    popups: popupSlice,
    personalProfile: personalProfileSlice,
    leaveReview: leaveReviewSlice,
    admin: adminSlice,
    createListing: createListingSlice,
    search: searchSlice,
    listing: listingSlice,
    compareBanks: compareBanksSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;