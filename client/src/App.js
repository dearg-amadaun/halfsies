import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/home/Login';
import Dashboard from './components/profile/Dashboard';
import Match from './components/match/Match';
import Maps from './components/maps/Maps';
import Comments from './components/comments/Comments';
import Navigation from './components/navigation/Navigation';
import { AuthProvider } from "./components/profile/Auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <div className="mainContent">
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route path="/match" component={Match} />
              <Route path="/maps" component={Maps} />
              <Route path="/comments" component={Comments} />
            </div>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
