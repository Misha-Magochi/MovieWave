

const homePageReducer = (
    state = {
      sliderData: [],
      loading: false,
      error: null,
    },
    action: { type: any; payload: any; }
  ) => {
    switch (action.type) {
      case 'FETCH_ITEMS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_ITEMS_SUCCESS':
        return {
          ...state,
          loading: false,
          sliderData: action.payload,
        };
      case 'FETCH_ITEMS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default homePageReducer;