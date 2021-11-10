import React, { useState } from "react";
import '../signup/signup.css'
import {
  Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../profile/config";

const Signup = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="signupPage">
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input className="shadow" type="text" name="name" />

        <label for="email">Email</label><br />
        <input className="shadow" type="email" name="email" />

        <label for="password">Password</label><br />
        <input className="shadow password" type="password" name="password" />

        <label>Confirm Password</label>
        <input for="password" className="shadow password2" type="password" name="password" />

        <label>Pronoun</label><br />
        <input className="shadow" type="text" name="pronoun" />

        <button className="submitBtn shadow">
          <Link type="submit" to="/dashboard">
            <span>
              <div className="sUBtn shadow">Signup</div>
            </span>
          </Link>
        </button>
      </form>
    </div>
  )
};

export default Signup;