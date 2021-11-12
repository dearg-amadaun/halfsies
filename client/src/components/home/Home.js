import React, { useContext } from "react";
import { AuthContext } from "../profile/Auth";
import '../home/home.css'
import {
  Link
} from "react-router-dom";

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
          <div className="logout shadow">
            <Link to="/login">
            <span><div className="logoutBtn shadow">Log In</div></span>
            </Link>
          </div>
          <br/>
          <h1>or</h1>
          <div className="logout shadow">
            <Link to="/signup">
              <span><div className="logoutBtn shadow">Sign Up</div></span>
            </Link>
          </div>
        </p>
      )}


    </div>

  )
};

export default Home;