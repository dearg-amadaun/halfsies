import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import '../match/match.css';


const Match = ({ name, about, profilePic, favorites }) => {
  return (
    <Link to={`/messagescreen/${name}`}>
      <div className="match shadow grow">
        <Avatar className="match-image" src={profilePic} />
        <div className="match-details">
          <h2>{name}</h2>
          <p>{about}</p>
        </div>
        <p className="match-timestamp">{favorites}</p>
      </div>
    </Link>
  );
};

export default Match;