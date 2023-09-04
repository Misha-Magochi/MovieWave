import { createSlice, PayloadAction } from "@reduxjs/toolkit";


 interface SliderState {
    sliderData: [];
    loading: boolean;
    error: string;
}

const initialState: SliderState = {
    sliderData: [],
    loading: true,
    error: ''
}

export const sliderSlice = createSlice( {
    name: 'slider',
    initialState,
    reducers: {
        fetchSliderData(state) {
            state.loading = true;
        },
        fetchSliderDataSuccess(state, action: PayloadAction<[]>) {
            state.loading = false;
            state.error = ''
            state.sliderData = action.payload;
        },
        fetchSliderDataError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default sliderSlice.reducer;