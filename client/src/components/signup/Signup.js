import React, { useState } from "react";
import '../signup/signup.css'
import '../home/home.css'
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
        <label for="email">Email</label><br />
        <input className="shadow" type="email" name="email" />

        <label for="password">Password</label><br />
        <input className="shadow password" type="password" name="password" />

        <label for="password" >Confirm Password</label>
        <input className="shadow password2" type="password" name="password2" />
        <button className="submitBtn shadow"><span><div className="sUBtn shadow" type="submit">Submit</div></span></button>
      </form>
    </div>
  )
};

export default Signup;