import React from 'react';
import '../home/home.css'
import {
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <div className="homePage">
      <form>
        <label>Email</label><br />
        <input className="shadow" type="text" name="email" />

        <label>Password</label><br />
        <input className="shadow" type="text" name="password" />

        <div className="loginBtn shadow">
          <Link to="/profile" className="sUBtn">
            <span>
              <div className="sUBtn">Login</div>
            </span>
          </Link>
        </div>

        <div className="submitBtn2 shadow">
          <Link to="/signup" className="sUBtn">
            <span>
              <div className="sUBtn">Signup</div>
            </span>
          </Link>
        </div>
        <p class="error">
              <span>Not a member?</span>
            </p>
      </form>
    </div>

  )
};

export default Home;