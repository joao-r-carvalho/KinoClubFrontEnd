import React from 'react';
import './Style/Common.css'
import './App.css';
import TopBanner from './Components/Common/TopBanner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Authentication/Login'
import BottomBanner from './Components/Common/BottomBanner';
import MovieHero from './Pages/Movies/MovieHero';
import RegisterForm from './Components/Forms/RegisterForm';
function App() {
  return (
    <div className="MainLayout">
      <Router>
        <TopBanner />
        <Switch className="MainBody">
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} /> 
              <Route exact path={process.env.PUBLIC_URL + '/KinoClubFrontend'} component={Home} /> 
              <Route exact path={process.env.PUBLIC_URL + '/MovieHero/:MovieId'} component={MovieHero} /> 
              <Route exact path={process.env.PUBLIC_URL + '/Login'} component={Login} /> 
              <Route exact path={process.env.PUBLIC_URL + '/Register'} component={RegisterForm} /> 
        </Switch>
        <BottomBanner/>
      </Router>


    </div>
  );
}

export default App;
