import React from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import HeaderMenu from '../header-menu/haeder-menu';
import Footer from '../footer/Footer';
import SimpleSlider from '../simple-slider/simple-slider';
import Sidebar from '../side-bar/side-bar';
import HomePage from '../home-page/home-page';
import Top100 from '../top-100/top-100';
import MoviesGener from '../movies-gener/movies-gener';
import MoviesPages from '../movies-pages/movies-pages';
import MovieHomePage from '../movie-home-page/movie-home-page';

const { Content } = Layout;

const AppRouter = () => {
    return (
        <Layout>
            <HeaderMenu />
            <Layout>
                <Routes>
                    <Route path="/" element={<SimpleSlider />} />
                </Routes>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Routes>
                        <Route path='/:Type/:Gener/:Title/:movieId?' element={null} />
                        <Route path='*' element={<Sidebar />} />
                    </Routes>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/top-100/:genre" element={<Top100 />} />
                            <Route path="/:movieType/:movieGener" element={<MoviesGener />} />
                            <Route path='/:movieType' element={<MoviesPages />} />
                            <Route path='/:Type/:Gener/:Title/:movieId?' element={<MovieHomePage />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default AppRouter;