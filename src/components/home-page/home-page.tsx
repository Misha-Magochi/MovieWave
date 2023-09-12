import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchHomePageMovies } from "../../redux/features/movies/moviesSlice";
import { HomeProps } from "./interfaces";
import Spinner from "../spinner/spinner";
import MovieList from "../movise-list-item/movie-list";

import "./home-page.css";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const moviesData = useAppSelector((state) => state.homePageMovies.movies);
  const loading = useAppSelector((state) => state.homePageMovies.loading);  

  useEffect(() => {
    dispatch(fetchHomePageMovies());
  }, [dispatch]);

  return (
    <div className="home-container">
      {loading ? (
        <Spinner />
      ) : (
        <div className="home-content">
          {moviesData.map((dataItem: HomeProps) => (
            <div key={dataItem._id} className="home-item">
              <MovieList movies={dataItem.doc} dataItem={dataItem} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;