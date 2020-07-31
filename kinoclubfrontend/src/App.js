import React from 'react';
import './Style/Common.css'
import MoviePresentation from './Components/Movies/MoviePresentation.js';
import './App.css';
import TopBanner from './Components/Common/TopBanner'
import MovieCarousel from './Components/Movies/MovieCarousel'
function App() {
  return (
    <div className= "MainLayout">
      <TopBanner/>
      <MovieCarousel/>
      <MoviePresentation />


    </div>
  );
}

export default App;
