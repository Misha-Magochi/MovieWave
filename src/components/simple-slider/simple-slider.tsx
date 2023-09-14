import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DocType } from './interfaces';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Spinner from "../spinner/spinner";

import imgNF from "../../img/imgFV.jpg";
import './simple-slider.css';
import { fetchHomePageMovies } from "../../redux/features/movies/moviesSlice";

const SimpleSlider = () => {
  const dispatch = useAppDispatch();
  const moviesData = useAppSelector((state) => state.homePageMovies.movies);
  const loading = useAppSelector((state) => state.homePageMovies.loading);
  const error = useAppSelector((state) => state.homePageMovies.error);
 
  

  useEffect(() => {
    dispatch(fetchHomePageMovies());
  }, []);

  const sliderRef = useRef(null);
  
  const combinedMoviesData = moviesData.reduce((
    combined: DocType[], obj: { doc: DocType[] }) => [...combined, ...obj.doc], []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: <button className="slick-prev" onClick={() => sliderRef.current.slickPrev()}>Previous</button>,
    nextArrow: <button className="slick-next" onClick={() => sliderRef.current.slickNext()}>Next</button>,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    ]
  };

  return (
    <div className="slider-container">
      {loading ? (
        <Spinner /> 
      ) : error ? (
      <div className="error-message">{error}</div>
    ) : (
        <Slider {...settings} ref={sliderRef}>
          {combinedMoviesData.map((dataItem) => (
            <div key={dataItem._id} className="slide">
              <div className="slide-content">
                <img 
                src={dataItem.Poster} 
                alt={dataItem.Title} 
                className="slider-image"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.src = imgNF;
                }} />
                <div className="image-title">{dataItem.Title}</div>
                <div className="image-genre">{dataItem.Genre ? dataItem.Genre.split(",")[0] : ""}</div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};


export default SimpleSlider;







