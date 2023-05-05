import React from "react";
import "./Message.css";
import { Avatar } from "@mui/material";

function Message() {
  return (
    <div className="message">
      <Avatar src="https://i.pinimg.com/564x/13/8d/52/138d52a8f429510e2c16bd67990dae3c.jpg" />
      <div className="message__info">
        <h4>
          cosmincherciu
          <span className="message_timestamp">this is a timestamp</span>
        </h4>
        <p>Message</p>
      </div>
    </div>
  );
}

export default Message;
