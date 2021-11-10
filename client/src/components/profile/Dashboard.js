import React, { useContext } from "react";
import '../profile/profile.css'
import blank from '../images/blank.png';
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
      <div className="profSettings">
        <div className="currentSettings">
          <div>
            <img src={blank} className="profPic" alt="myPic" />
          </div>
          <div>
            <form>
              <label>Name:</label><br />

              <label>
                Email:</label><br />

              <label>
                Password:</label><br />

              <label>
                Pronoun:</label><br />

              <label>
                Zipcode:</label><br />

              <label>
                Radius:</label><br />

              <label>
                Tagline:</label><br />
              <div>
                <ul>
                  <h1>Top 5</h1>
                  <li>
                    <label>
                      1
                    </label>
                  </li>
                  <li>
                    <label>
                      2
                    </label>
                  </li>
                  <li>
                    <label>
                      3
                    </label>
                  </li>
                  <li>
                    <label>
                      4
                    </label>
                  </li>
                  <li>
                    <label>
                      5
                    </label>
                  </li>
                </ul>
                <div className="editBtnDiv shadow">
                  <Link to="/">
                    <span>
                      <div className="editBtn shadow">Edit</div>
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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