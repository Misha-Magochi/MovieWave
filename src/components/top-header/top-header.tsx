import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

import './top-header.css';
import { DocType } from './interface';
import { Link } from 'react-router-dom';

const TopHeader: React.FC = () => {
    const moviesData = useAppSelector((state) => state.homePageMovies.movies);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
        setSelectedId(selectedId === id ? null : id);
    };

    return (
        <div
            className='header-item-container'
            onMouseLeave={() => setSelectedId(null)}
        >
            <div className='header-item' onClick={() => toggleMenu(100)}>
                Top 100 {selectedId === 100 ? '▲' : '▼'}
            </div>
            {selectedId === 100 && (
                <div className='header-item-list'>
                    {moviesData.map((category: DocType) => (
                        <div className='list-item' key={category._id}>
                            <span
                                className={`list-item-gener ${
                                    category._id === selectedId ? 'active' : ''
                                }`}
                                onClick={() => toggleMenu(category._id)}>
                                <Link to={`/top-100/${category._id}`} className="list-item">
                                    Top 100 {category._id}
                                </Link>
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopHeader;