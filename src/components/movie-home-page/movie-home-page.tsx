import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import axiosinstans from "../../lib/axios";
import Spinner from "../spinner/spinner";
import { PlayCircleOutlined } from '@ant-design/icons';
import { Movie } from "./interfaces";
import { Button } from "antd";

// @ts-ignore
import video from "../../video/videoplayback.mp4";
// @ts-ignore
import imgNF from "../../img/imgFV.jpg";
import "./movie-home-page.css";

const MovieHomePage = () => {
    const { movieId } = useParams<{ movieId?: string }>();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<Movie | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const response = await axiosinstans.get(`/api/movie?movieId=${movieId}`);
        const movieData = response.data;

        if (movieData) {
          setMovie(movieData);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error while retrieving movie data:', error);
        setLoading(false);
      }
    };

    fetchSingleMovie();
  }, [movieId]);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowButton(false);
    }
  };

  return (
    <div className="container-movie_h">
      {loading ? (
        <Spinner />
      ) : movie ? (
        <>
          <div className="movie-head">
            <span className="title-movie">{movie.film.Title}</span>
          </div>
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
          <div className="plot-block"><span>{movie.film.Plot}</span></div>
          <div className="head-player">{movie.film.Title}</div>
          <div className="video-container">
            <video ref={videoRef} controls className="film_video" src={video}></video>
            <Button
              className="btn_play"
              icon={<PlayCircleOutlined style={{ fontSize: "50px", color: "#fff" }} />}
              onClick={playVideo}
              style={{
                display: showButton ? "block" : "none",
              }}
            ></Button>
          </div>
          {movie.similarFilm && movie.similarFilm.length > 0 && (
            <div>
              <div className="movie-head">Watch more fo Similar movies</div>
              <div className="block-similar-movie">
                {movie.similarFilm.map((film) => (
                  <div key={film._id} className="movie-item-similar">
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieHomePage;
