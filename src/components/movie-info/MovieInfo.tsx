import React from "react";
// @ts-ignore
import imgNF from "../../img/imgFV.jpg";


const MovieInfo = ({ movie }) => {
  return (
    <div className="block-movie-page">
      <img
        className="movie-image"
        src={movie.film.Poster}
        alt={movie.film.Title}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src = imgNF;
          }}
      />
      <div className="block_p">
        <ul className="block_description">
          <li><b className="text-b">Rated:</b> {movie.film.Rated}</li>
          <li><b className="text-b">Year:</b> {movie.film.Year}</li>
          <li><b className="text-b">Released:</b> {movie.film.Released}</li>
          <li><b className="text-b">Country:</b> {movie.film.Country}</li>
          <li><b className="text-b">Runtime:</b> {movie.film.Runtime}</li>
          <li><b className="text-b">Genre:</b> {movie.film.Genre}</li>
          <li><b className="text-b">Actors:</b> {movie.film.Actors}</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;