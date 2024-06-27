// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { WebSocketServer } = require('ws');

dotenv.config();

const app = express();
const router = require("./src/router/index");

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

const PORT = process.env.PORT || 3000;

// Create an HTTP server
const server = http.createServer(app);

// Initialize the WebSocket server instance
// const wss = new WebSocketServer({ server });

// // Placeholder for player data
// let playerData = [
//     {id:1,score:200}
// ]; // Ensure you initialize this appropriately

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//     ws.send(JSON.stringify(playerData));
// });

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the WebSocket server instance and playerData for use in other files
// module.exports = { wss, playerData };
