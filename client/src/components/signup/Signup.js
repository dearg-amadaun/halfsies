import React from 'react';
import '../signup/signup.css'
import {
  Link
} from "react-router-dom";

const Signup = (props) => {
  return (
    <div className="signupPage">
      <form>
        <label>Name</label><br/>
        <input className="shadow" type="text" name="name" />

        <label>Email</label><br/>
        <input className="shadow" type="text" name="email" />

        <label>Password</label><br/>
        <input className="shadow password" type="text" name="password" />
        
        <label>Confirm Password</label>
        <input className="shadow password2" type="text" name="password" />

        <label>Pronoun</label><br/>
        <input className="shadow" type="text" name="pronoun" />

        <div className="submitBtn shadow">
          <Link to="/profile">
            <span>
              <div className="sUBtn shadow">Signup</div>
            </span>
          </Link>
        </div>
      </form>
    </div>
  )
};

export default Signup;