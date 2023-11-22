import React, { useState } from "react";
import { Link } from "react-router-dom";

// @ts-ignore
import imgNF from "../../img/imgFV.jpg";
import "./movie-list.css";

const MovieList = ({ movies, dataItem }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="movie-list">
      <div className="movie-head">
        <span className="movie-head-title">New {dataItem._id}</span>
        {movies.length > 8 && (
          <span onClick={toggleShowAll} className="show-all-button">
            {showAll ? "Сlose" : "Show all movies"}
          </span>
        )}
      </div>
      <div className="movie-item-block">
        {movies.slice(0, showAll ? movies.length : 8).map((movie) => (
          <div key={movie._id} className="movie-item">
          <Link to={`
          /${encodeURIComponent(dataItem.doc[0]?.Type)}
          /${encodeURIComponent(dataItem.doc[0]?.Genre)}
          /${encodeURIComponent(encodeURI(dataItem.doc[0]?.Title))}
          /${movie._id}`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;