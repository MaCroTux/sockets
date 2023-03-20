const socket = io("ws://localhost:7071", { transports: ["websocket"] });

socket.on("message", (message) => {
  console.log(message);
})