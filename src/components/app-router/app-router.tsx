import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import HomePage from '../home-page/home-page';
import TopMovies from '../top-100/top-100'; 

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-100" element={<TopMovies />} />
    </Routes>
  );
};

export default AppRouter;