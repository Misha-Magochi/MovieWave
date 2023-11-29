import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import imgNF from "../../img/imgFV.jpg";

const SimilarMovies = ({ similarFilms }) => {
    
  return (
    <div>
      <div className="movie-head">Watch more for Similar movies </div>
      <div className="block-similar-movie">
        {similarFilms.map((film) => (
          <div key={film._id} className="movie-item-similar">
            <Link to={`/${film[0]?.Type}/${film.Genre}/${encodeURIComponent(film[0]?.Title)}/${film._id}`}>
              <img
                src={film.Poster}
                alt={film.Title}
                className="movie-image"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = imgNF;
                  }}
              />
              <h4 className="movie-title">{film.Title}</h4>
              <div className="movie-rls">
                <span className="movie-gener">{film.Type}</span>
                <div>{film.Released}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;