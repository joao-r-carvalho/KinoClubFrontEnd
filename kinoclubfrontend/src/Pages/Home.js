import React from 'react';
import '../Style/Common.css'
import MovieCarousel from '../Components/Movies/MovieCarousel'

function Home() {
    return (
        <div className="Home" >
            <h2>Featured Movies!</h2>
            <br/>

            <MovieCarousel />


        </div>
    );
}

export default Home;
