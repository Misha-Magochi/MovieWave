import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosinstans from '../lib/axios';
import { AxiosResponse } from 'axios';

import './simple-slider.css';

const SimpleSlider = () => {
  const [sliderData, setSliderData] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    axiosinstans.get('/api/home-page')
      .then((response: AxiosResponse) => {
        const responseData = response.data;
        const combinedDocs = responseData.reduce((combined: any, obj: { doc: any; }) => [...combined, ...obj.doc], []);
        setSliderData(combinedDocs);
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    prevArrow: <button className="slick-prev" onClick={() => sliderRef.current.slickPrev()}>Previous</button>,
    nextArrow: <button className="slick-next" onClick={() => sliderRef.current.slickNext()}>Next</button>,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },

    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {sliderData.map((dataItem) => (
          <div key={dataItem._id} className="slide">
            <div className="slide-content">
              <img src={dataItem.Poster} alt={dataItem.Title} className="slider-image" />
              <div className="image-title">{dataItem.Title}</div>
              <div className="image-genre">{dataItem.Genre.split(",")[0]}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;







