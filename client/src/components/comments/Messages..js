import React from "react";
import Convo from "./Convo";
import { Link } from "react-router-dom";
import firebaseConfig from "../profile/config";
import '../comments/messages.css';

const Messages = () => {
  return (
    <div className="convos">
      <Convo
        name="Steve"
        message="Hey!"
        timestamp=" 10 mins ago"
        profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />

      <Convo
        name="Brendan"
        message="whats up!"
        timestamp="1 hr ago"
        profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />

      <Convo
        name="Josh"
        message="yoooo!"
        timestamp="2 hrs ago"
        profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />

      <Convo
        name="Kim"
        message="Hi!!"
        timestamp="12 hrs ago"
        profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />

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
  );
};

export default Messages;