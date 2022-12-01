const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", (ws) => {
  console.log("New client connected!");

  ws.on("message", (data, isBinary) => {
    const message = isBinary ? data : data.toString();
    console.log(`Client has sent us: ${message}`);

    ws.send(message.toUpperCase());
  });

  ws.on("close", () => {
    console.log("Client has disconnected.");
  });
});
