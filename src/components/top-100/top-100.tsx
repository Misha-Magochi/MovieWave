import React, { useEffect, useState } from 'react';
import imgNF from "../../img/imgFV.jpg";
import { useParams } from 'react-router';
import axiosinstans from '../../lib/axios';
import './top-100.css';

const Top100: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const { genre } = useParams();

  useEffect(() => {
    axiosinstans
      .get('/api/routing-movies', {
        params: {
          topType: genre,
          movieByType: 'top-100', 
          sortedBy: 'imdbRating',
        },
      })
      .then((response) => {
        const moviesData = response.data.result;
        setMovies(moviesData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [genre]);

  const genreDescriptions = {
    films: 'films',
    series: 'series',
    cartoon: 'cartoon',
    anime: 'anime',
  };
  
  return (
    <div>
      <span className='movie-head' >
        <div className='movie-head-title'> 
          Watch all top 100 {genreDescriptions[genre] || 'content'}
        </div>
      </span>
      <div className="movie-item-block">
        {movies.map((movie: any) => (
          movie.Poster && movie.Title && movie.Type && movie.Released && (
            <div key={movie._id} className="movie-item">
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
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Top100;