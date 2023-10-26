import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../home-page/home-page';
import MoviesPage from '../movies-pages/movies-pages';
import Top100 from '../top-100/top-100';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-100/:genre" element={<Top100 />} />
      <Route path='/:movieType'element={<MoviesPage  />} />
    </Routes>
  );
};

export default AppRouter;