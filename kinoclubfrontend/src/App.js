import React from 'react';
import './Style/Common.css'
import MoviePresentation from './Components/Movies/MoviePresentation.js';
import './App.css';
import TopBanner from './Components/Common/TopBanner'
function App() {
  return (
    <div className= "MainLayout">
      <TopBanner/>
      <MoviePresentation />


    </div>
  );
}

export default App;
