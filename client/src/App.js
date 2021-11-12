import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/home/Login';
import Dashboard from './components/profile/Dashboard';
import Match from './components/match/Match';
import Maps from './components/maps/Maps';
import Messages from './components/comments/Messages.';
import Convo from './components/comments/Convo';
import MessageScreen from './components/comments/MessageScreen';
import Navigation from './components/navigation/Navigation';
import { AuthProvider } from "./components/profile/Auth";
import MatchProfiles from './components/match/MatchProfiles';
import SearchPpl from './components/match/SearchPpl';



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
                <Route path="/matchprofiles" component={MatchProfiles} />
                <Route path="/match" component={Match} />
                <Route path="/searchppl" component={SearchPpl} />
                <Route path="/maps" component={Maps} />
                <Route path="/messages" component={Messages} />
                <Route path="/convo" component={Convo} />
                <Route path="/messagescreen" component={MessageScreen} />
              </div>
            </Switch>
          </BrowserRouter>
        </AuthProvider>

    </div>
  );
}

export default App;
