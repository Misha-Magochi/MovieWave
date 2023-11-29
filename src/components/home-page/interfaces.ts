export interface Movie {
    _id: string;
    Title: string;
    Poster: string;
    Genre: string;
    Released: string;
  }

export interface Doc {
    _id: string;
    doc: Movie[]; 
  }

export interface HomeProps {
<<<<<<< HEAD
=======
    Type: any;
>>>>>>> feature-movieHomePage
    doc: Movie[]; 
    _id: string;
    Title: string;
    Genre: string;
  }