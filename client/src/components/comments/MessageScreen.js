import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import firebaseConfig from "../profile/config";
import '../comments/messages.css';

const MessageScreen = (prop) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Steve",
      image: "https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jp",
      message: "Hey!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="messageScreen">
      <p className="messageScreen-timestamp">

      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="messageScreen-message messageScreen shadow">
            <Avatar
              className="messageScreen-image messageScreen shadow"
              alt={message.name}
              src={message.image}
            />
            <p className="messageScreen-text">{message.message}</p>
          </div>
        ) : (
          <div className="messageScreen-message">
            <p className="messageScreen-owntext">{message.message}</p>
          </div>
        )
      )}
      <form className="messageScreen-form">
        <input
          className="messageScreen-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="messageScreen-button"
        >
          Send
        </button>
      </form>
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

export default MessageScreen;