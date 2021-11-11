import React, { useContext } from "react";
import '../profile/profile.css'
import { AuthProvider } from '../profile/Auth'
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "./config";
const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/home" />;
  }
  return (
    <div>
      {currentUser && (
        <>
          <img
            src={currentUser.photoURL}
            width="100"
            height="100"
            alt="avatar"
          />
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
        </>
      )}
      <AuthProvider />
      <br />
      <br />
      <br />

      <div className="logout shadow">
        <Link to="/home">
          <span>
            <div onClick={() => firebaseConfig.auth().signOut()} className="logoutBtn shadow">Logout</div>
          </span>
        </Link>
      </div>
    </div>

  )
};


export default Dashboard;