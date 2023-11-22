import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { DocType } from './interface';

// @ts-ignore
import imgNF from '../../img/imgFV.jpg';

const Top100: React.FC = () => {
  const moviesData = useAppSelector((state) => state.homePageMovies.movies as DocType[]);
  const [genreMovies, setGenreMovies] = useState<DocType[]>([]);
  const { genre } = useParams();

  useEffect(() => {
    const filteredMovies = moviesData.find((category: DocType) => category._id === genre)?.doc || [];
    setGenreMovies(filteredMovies);
  }, [genre, moviesData]);

  return (
    <div>
      <span className="movie-head">
        <div className="movie-head-title">Watch all top 100</div>
      </span>
      <div className="movie-item-block">
        {genreMovies.map((movie: DocType) => (
          <Link
  key={movie._id}
  to={`
  /${encodeURIComponent(movie.Type)}
  /${encodeURIComponent(movie[0]?.Genre)}
  /${encodeURIComponent(encodeURI(movie.Title))}
  /${movie._id}`}
  className="movie-item"
>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-image"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = imgNF;
              }}
            />
            <h3 className="movie-title">{movie.Title}</h3>
            <div className="movie-rls">
              <span className="movie-gener">{movie.Type}</span>
              <div>{movie.Released}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Top100;