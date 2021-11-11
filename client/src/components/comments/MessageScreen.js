import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";


const MessageScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Steve",
      image:
        "https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jp",
      message: "Hey!",
    },
    {
      name: "Steve",
      image:
        "https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jp",
      message: "Whats up!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="messageScreen">
      <p className="messageScreen__timestamp">
        
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="messageScreen__message">
            <Avatar
              className="messageScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="messageScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="messageScreen__message">
            <p className="messageScreen__owntext">{message.message}</p>
          </div>
        )
      )}
      <form className="messageScreen__form">
        <input
          className="messageScreen__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="messageScreen__button"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageScreen;