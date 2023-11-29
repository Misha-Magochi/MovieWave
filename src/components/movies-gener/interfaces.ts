 
export interface Movie {
    map(arg0: (movie: any) => import("react").JSX.Element): import("react").ReactNode;
    _id: string;
    Poster: string;
    Title: string;
    Type: string;
    Released: string;
  }