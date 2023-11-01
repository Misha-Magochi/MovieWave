import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosinstans from '../../lib/axios';
import Spinner from '../spinner/spinner';
import imgNF from '../../img/imgFV.jpg';
import './movies-gener.css';

function MoviesGener() {
    const { movieType, movieGener } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosinstans.get('/api/routing-movies', {
                    params: {
                        movieByType: movieType,
                        sortedBy: 'imdbRating',
                        movieByGenre: movieGener,
                    },
                });

                setMovies(response.data.result);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [movieType, movieGener]);


    return (
        <div className="movie-list">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div className="movie-head">
              <span className="movie-head-title">Watch {movieType} of {movieGener} </span>
              </div>
              <div className="movie-item-block">
                {movies[0].map((movie) => (
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
                ))}
              </div>
            </>
          )}
        </div>
      );
}

export default MoviesGener;





