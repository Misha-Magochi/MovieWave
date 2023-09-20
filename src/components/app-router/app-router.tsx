import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../home-page/home-page';
import Top100 from '../top-100/top-100';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-100/series" element={<Top100 genre="series"  />} />
      <Route path="/top-100/films" element={<Top100 genre="films" />} />
      <Route path="/top-100/cartoon" element={<Top100 genre="cartoon" />} />
      <Route path="/top-100/anime" element={<Top100 genre="anime" />} />
    </Routes>
  );
};

export default AppRouter;