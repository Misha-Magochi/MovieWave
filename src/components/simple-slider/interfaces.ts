export interface SliderState {
    sliderData: [];
    loading: boolean;
    error: string | null;
  }

export interface SliderProps {
    _id: number;
    Poster: string;
    Title: string;
    Genre: string;
}