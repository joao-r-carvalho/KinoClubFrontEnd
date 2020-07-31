import React from 'react';
import '../Style/Common.css'
import MoviePresentation from '../Components/Movies/MoviePresentation.js';
import MovieCarousel from '../Components/Movies/MovieCarousel'

function Home() {
    return (
        <div className="MainLayout">

            <MovieCarousel />
            <MoviePresentation />


        </div>
    );
}

export default Home;
