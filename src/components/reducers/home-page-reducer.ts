

/* const homePageReducer = (
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
          sliderData: [],
          loading: true,
          error: null,
        };
      case 'FETCH_ITEMS_SUCCESS':
        return {
          books: action.payload,
          loading: false,
          sliderData: action.payload,
        };
      case 'FETCH_ITEMS_FAILURE':
        return {
          sliderData: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state.sliderData;
    }
  };
  
  export default homePageReducer; */