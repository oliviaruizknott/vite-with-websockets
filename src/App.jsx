import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  // on mount, connect to web sockets
  useEffect(() => {
    const ws = new WebSocket("ws://10.0.0.70:8082");

    ws.addEventListener("open", () => {
      console.log("We are connected!");

      ws.send("Hey, how’s it goin’.");
    });

    ws.addEventListener("message", (e) => {
      console.log(e.data);
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
