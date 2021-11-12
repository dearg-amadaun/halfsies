import React from 'react';
import { Link } from "react-router-dom";
import firebaseConfig from "../profile/config";
import yelp from '../images/yelp.png'

const Maps = (props) => {
  return (
    <div>
      <img className="shadow" src={yelp}></img>



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

export default Maps;