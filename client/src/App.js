import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import Match from './components/match/Match';
import Maps from './components/maps/Maps';
import Comments from './components/comments/Comments';
import Navigation from './components/navigation/Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <div className="mainContent">
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup" component={Signup} />
            <Route path="/match" component={Match} />
            <Route path="/maps" component={Maps} />
            <Route path="/comments" component={Comments} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
