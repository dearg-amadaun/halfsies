import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../profile/Auth";
import firebaseConfig from "../profile/config.js";
import '../home/home.css'


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input className="shadow" type="email" name="email" />

        <label>Password</label><br />
        <input className="shadow" type="password" name="password" />

        <button className="loginBtn shadow">
          <div type="submit">
            <span>
              <div className="sUBtn" >Submit</div>
            </span>
          </div>

        </button>

       
      </form>
    </div>
  );
};

export default Login;