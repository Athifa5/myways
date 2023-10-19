import React from "react";
import "./chat.css";
import photo from './cam.png';
function Chat(){
    return(
        <div>
        <div className={"top"}>
        <p className={"chat"}>Chat Room</p>
        <img src={photo} className={"cm"}></img>
        
        </div>
        <hr></hr>
        <div id="chatbox">
        
        </div>
        <div id="sending">
        <input type="text" placeholder="Write a message..."></input>
        </div>
        </div>
  
    );
}

export default Chat;