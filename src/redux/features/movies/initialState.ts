interface SliderState {
  movies: [];
  loading: boolean;
  error: string;
}

const initialState: SliderState = {
  movies: [],
  loading: true,
  error: "",
};
export default initialState;
