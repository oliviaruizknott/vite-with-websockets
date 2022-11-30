import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App = () => {
  // on mount, connect to web sockets
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8082");

    ws.addEventListener("open", (ws) => {
      console.log("We are connected!");
    });
  }, []);

  return (
    <div>
      <p>I will test Websockets.</p>
      <button>The button.</button>
      <p>My ID is: _____</p>
      <p>The button is pressed by: _____</p>
    </div>
  );
};

export default App;
