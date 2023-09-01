import axiosinstans from '../lib/axios';
import { AnyAction } from 'redux';
import { Dispatch } from 'redux';

export const fetchSliderDataRequest = () => ({
    type: 'FETCH_SLIDER_DATA_REQUEST',

});

export const fetchSliderDataSuccess = (data: any) => ({
    type: 'FETCH_SLIDER_DATA_SUCCESS',
    payload: data,
  });
  
  export const fetchSliderDataFailure = (error: any) => ({
    type: 'FETCH_SLIDER_DATA_FAILURE',
    payload: error,
  });

  export const fetchSliderData = (): any => {
    return (dispatch: (arg0: AnyAction) => void, _Dispatch: any) => {
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
  };