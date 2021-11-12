import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import '../comments/messages.css';


const Convo = ({ name, message, profilePic, timestamp }) => {
  return (
    <Link to={`/messagescreen/${name}`}>
      <div className="convo shadow grow">
        <Avatar className="convo_image" src={profilePic} />
        <div className="convo_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="convo_timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Convo;