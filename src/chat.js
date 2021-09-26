import { React, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from 'axios';

const Chat = ({ messages }) => {

  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:9000/messages/new',{
      message : input,
      name: "Shreyash",
      timestamp: "Just Now",
      received: false
    });

    setInput('');
  }  

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="class__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${!message.received && "chat__sender"}`}>
            <span className="chat__name">{messages.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form>
          <input value={input} onChange={(e) => {setInput(e.target.value)}} placaholder="Type a message" type="text" name="" id="" />
          <button onClick={ sendMessage } type="submit">Send a message</button>
          <div className="mic__icon">
            <MicIcon />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
