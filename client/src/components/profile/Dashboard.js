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
    <div className="currentSettings">
      {currentUser && (
        <>
         <div className="centerImg"><img className="profpic shadow"
            src={currentUser.photoURL}
            width="100"
            height="100"
            alt="avatar"
          /></div>
          
          <div className="name"><h1>{currentUser.displayName}</h1>
          <h2>{currentUser.email}</h2>
          <h3>{currentUser.tagline}</h3>
          <p>{currentUser.favorites}</p></div>
        </>
      )}
      <div className="logout shadow">
        <Link to="/searchppl">
          <span>
            <div className="logoutBtn shadow">Start Swiping</div>
          </span>
        </Link>
      </div>
      <AuthProvider />
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