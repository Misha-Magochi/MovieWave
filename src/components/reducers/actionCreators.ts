
import { sliderSlice } from './sliceSlider';
import axiosinstans from '../lib/axios';
import { AppDispatch } from '../store';

export const fetchSliderData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(sliderSlice.actions.fetchSliderData());
      const response = await axiosinstans.get<[]>(`/api/home-page`);
      const responseData = response.data;
      const combinedData = responseData.reduce(
        (combined: any, obj: any) => [...combined, ...obj], []
      );
      dispatch(sliderSlice.actions.fetchSliderDataSuccess(combinedData));
      console.log(sliderSlice)
    } catch (e) {
      dispatch(sliderSlice.actions.fetchSliderDataError(e.message));
    }
  };
};















/* export const Request = () => ({
    type: 'FETCH_SLIDER_DATA_REQUEST',
});

export const fetchSliderDataSuccess = (data: any) => ({
    type: 'FETCH_SLIDER_DATA_SUCCESS',
    payload: data,
  });
  
  export const fetchSliderDataFailure = (error: any) => ({
    type: 'FETCH_SLIDER_DATA_FAILURE',
    payload: error,
  }); */

/*   export const fetchSliderData = (): any => {
    return (dispatch: (arg0: AnyAction) => void) => {
      dispatch(fetchSliderDataRequest());
  
      axiosinstans.get('/api/home-page')
        .then((response) => {
          const responseData = response.data;
          const combinedDocs = responseData.reduce((combined: any, obj: { doc: any; }) => [...combined, ...obj.doc], []);
          dispatch(fetchSliderDataSuccess(combinedDocs));
        })
        .catch((error) => {
          dispatch(fetchSliderDataFailure(error.message));
        });
    };
  }; */