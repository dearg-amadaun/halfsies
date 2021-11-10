import React, { useContext } from "react";
import { AuthContext } from "../profile/Auth";
import '../home/home.css'
import {
  Link
} from "react-router-dom";
import Login from './Login'

const Home = (props) => {
    const { currentUser } = useContext(AuthContext);
  return (
    <div className="homePage">
        {currentUser ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
        </p>
      ) : (
        <p>
         <Login/>
        </p>
      )}
      
    
    </div>

  )
};

export default Home;