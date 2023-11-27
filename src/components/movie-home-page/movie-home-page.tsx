import Spinner from "../spinner/spinner";
import CustomRating from "./CustomRating";
import MovieInfo from "../movie-info/MovieInfo";
import MoviePlayer from "../movie-player/MoviePlayer";
import SimilarMovies from "../similar-movies/SimilarMovies";
import { Movie } from "./interfaces";
import { HeartTwoTone } from "@ant-design/icons";
// @ts-ignore
import video from "../../video/videoplayback.mp4";
// @ts-ignore
import imgNF from "../../img/imgFV.jpg";
import "./movie-home-page.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axiosinstans from "../../lib/axios";
import React from "react";

const MovieHomePage = () => {
  const { movieId } = useParams<{ movieId?: string }>();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [rating, setRating] = useState<number | undefined>(undefined);

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

  const handleHover = () => {
    setIsHovered(!isClicked);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleRateChange = (value: number | undefined) => {
    setRating(value);
  };

  return (
    <div className="container-movie_h">
      {loading ? (
        <Spinner />
      ) : movie ? (
        <>
          <div className="movie-head">
            <span className="title-movie">{movie.film.Title}</span>
            <button
              className={`similar-movies-icon ${isHovered ? "hover" : "#1677ff"} ${
                isClicked ? "clicked" : ""
              }`}
              onClick={handleClick}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <HeartTwoTone
                twoToneColor={isClicked ? "#fff" : "#fb3b5b"}
              />
            </button>
          </div>
          <MovieInfo movie={movie} />
          <div className="rate-block">
            <span className="rate-text">Rate the Movie: </span>
            <CustomRating onChange={handleRateChange} value={rating} />
            {rating !== undefined ? (
              <span className="rate-text" style={{ color: '#fff' }}> {rating} /5 stars</span>
            ) : (
              <span className="rate-text" style={{ color: '#fff' }}> No vote, be the first</span>
            )}
          </div>
          <div className="plot-block"><span>{movie.film.Plot}</span></div>
          <MoviePlayer movie={movie} playVideo={playVideo} showButton={showButton} videoRef={videoRef} />
          {movie.similarFilm && movie.similarFilm.length > 0 && (
            <SimilarMovies similarFilms={movie.similarFilm} />
          )}
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieHomePage;