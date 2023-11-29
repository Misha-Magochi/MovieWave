export interface Movie {
    Genre: any;
    _id: string;
    film: {
      Title: string;
      Poster: string;
      Rated: string;
      Year: string;
      Released: string;
      Country: string;
      Runtime: string;
      Genre: string;
      Actors: string;
      Plot: string;
      Type: string;
    };
    similarFilm: Array<{
      _id: string;
      Title: string;
      Poster: string;
      Year: string;
      Runtime: string;
      Genre: string;
      Director: string;
      Released: string;
      Type: string;
    }>;
  } 