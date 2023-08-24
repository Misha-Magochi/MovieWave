import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosinstans from '../lib/axios';
import { AxiosResponse } from 'axios';

const SimpleSlider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axiosinstans.get('/api/home-page')
      .then((response: AxiosResponse) => {
        const responseData = response.data;
        setSliderData(responseData);
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const sliderItems = (
    <Slider {...settings}>
      {sliderData.map((dataItem) => (
        <div key={dataItem._id}>
          <img src={dataItem.Poster} alt={dataItem.Title} />
        </div>
      ))}
    </Slider>
  );
  
  return sliderItems;
};

export default SimpleSlider; 