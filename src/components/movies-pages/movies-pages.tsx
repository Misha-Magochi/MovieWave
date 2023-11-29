import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";   
import axiosinstans from "../../lib/axios";
import Spinner from "../spinner/spinner";
import imgNF from "../../img/imgFV.jpg";
import "./movies-pages.css";


const typeMovies = {
    films: 'films',
    series: 'series',
    cartoon: 'cartoon',
    anime: 'anime',
};

const MoviesPages = () => {
    const { movieType } = useParams();
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosinstans.get('/api/routing-movies', {
                    params: {
                        movieByType: movieType,
                        sortedBy: 'imdbRating'
                    }
                });
                setMovies(response.data.result);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, [movieType]);

    return (
        <div className="movie-list">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div className="movie-head">
                <span className="movie-head-title">Watch all {typeMovies[movieType]}</span>
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

};

export default MoviesPages;

=======
import { Link, useParams } from "react-router-dom";   
import axiosinstans from "../../lib/axios";
import Spinner from "../spinner/spinner";
import { MovieResult } from "./interface";
// @ts-ignore
import imgNF from "../../img/imgFV.jpg";
import "./movies-pages.css";

const typeMovies = {
  films: 'films',
  series: 'series',
  cartoon: 'cartoon', 
  anime: 'anime',
};

const MoviesPages = () => {
  const { movieType } = useParams<{ movieType?: keyof typeof typeMovies }>() || {};
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (movieType) {
          const response = await axiosinstans.get('/api/routing-movies', {
            params: {
              movieByType: movieType,
              sortedBy: 'imdbRating'
            }
          });
          setMovies(response.data.result);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieType]);

  return (
    <div className="movie-list">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="movie-head">
            <span className="movie-head-title">Watch all {typeMovies[movieType || '']}</span>
          </div>
          <div className="movie-item-block">
          {movies.length > 0 && movies[0] && movies[0].map((movie) => (
            <div key={movie._id} className="movie-item">
              <Link to={`/${movie[0]?.Type}/${movie.Genre}/${encodeURIComponent(movie[0]?.Title)}/${movie._id}`}>
                <img
                  src={movie.Poster || imgNF}
                  alt={movie.Title || ''}
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
            </div>
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesPages;
>>>>>>> feature-movieHomePage
