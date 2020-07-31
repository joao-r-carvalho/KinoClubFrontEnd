import React from 'react';
import './Style/Common.css'
import './App.css';
import TopBanner from './Components/Common/TopBanner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Authentication/Login'
function App() {
  return (
    <div className="MainLayout">
      <Router>
        <TopBanner />
        <Switch>
              <Route exact path='/' component={Home} /> 
              <Route exact path='/Login' component={Login} /> 
        </Switch>
      </Router>


    </div>
  );
}

export default App;
