import React from 'react';
// import React, {useState, useEffect} from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import Match from './components/match/Match';
import Maps from './components/maps/Maps';
import Comments from './components/comments/Comments';
import Navigation from './components/navigation/Navigation';
// import PrivateRoute from './components/PrivateRoute';
// import Chat from './components/chat';


// Import the functions you need from the SDKs you need
// import { initializeApp, auth, database } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import database from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHDgYpd56o59OW_U4O4TgtA5M7llvn0A4",
//   authDomain: "halfsies-dc588.firebaseapp.com",
//   projectId: "halfsies-dc588",
//   storageBucket: "halfsies-dc588.appspot.com",
//   messagingSenderId: "95417433673",
//   appId: "1:95417433673:web:d3b3906325186a13f44998",
//   measurementId: "G-KV98JBPD86"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



function App() {
//   const auth = auth;
//   const db = database(); 
//   const [loading, setLoading] = useState(false);
//   const [authenticated, setAuthenticated] = useState(false);
//   useEffect(() => {
  
// });
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
            {/* <PrivateRoute path="/chat" authenticated={authenticated} component={Chat}></PrivateRoute> */}
          
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
