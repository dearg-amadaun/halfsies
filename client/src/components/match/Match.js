import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Match = ({ name, about, profilePic, favorites }) => {
  return (
    <Link to={`/match/${name}`}>
      <div className="match">
        <Avatar className="match__image" src={profilePic} />
        <div className="match__details">
          <h2>{name}</h2>
          <p>{about}</p>
        </div>
        <p className="match__timestamp">{favorites}</p>
      </div>
    </Link>
  );
};

export default Match;