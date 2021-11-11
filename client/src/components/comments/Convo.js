import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Convo = ({ name, message, profilePic, timestamp }) => {
  return (
    <Link to={`/convo/${name}`}>
      <div className="convo">
        <Avatar className="convo__image" src={profilePic} />
        <div className="convo__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="convo__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Convo;