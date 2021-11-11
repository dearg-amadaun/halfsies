import React from "react";
import Convo from "./Convo";


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
    </div>
  );
};

export default Messages;