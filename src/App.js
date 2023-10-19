import Chat from "./Components/Chat";
import React from "react";
import Todo from "./Components/Todo";
import "./App.css";
function App(){
    return (
        <div className="full">
        <div className="grid-container">
        <Chat className="grid-item"></Chat>
        <Todo className="grid-item" id="edit"></Todo>
        </div>
        </div>
    )
}
export default App;