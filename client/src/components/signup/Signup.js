import React, { useContext, useState } from "react";
import '../signup/signup.css'
import '../home/home.css'
import { Redirect } from "react-router-dom";
import { AuthContext } from "../profile/Auth";

const Signup = () => {

  const { currentUser, handleSubmit, signInWithGoogle } = useContext(AuthContext)


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

        <label for="password">Name</label><br />
        <input className="shadow password" type="name" name="name" />

        <label for="password">Tag-Line</label><br />
        <input className="shadow password" type="text" name="tagline" />

        <button onClick={signInWithGoogle} className="submitBtn shadow">
          <span>
            <div className="sUBtn shadow googlebtn" type="submit">Google Login</div>
          </span>
        </button>

        <button className="submitBtn shadow">
          <span>
            <div className="sUBtn shadow" type="submit">Submit</div>
          </span>
        </button>
      </form>
    </div>
  )
};

export default Signup;