// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { WebSocketServer } = require('ws');
const playerModel = require('./src/model/player.model');
const { sendResponse } = require('./src/utils/response');

const { Sequelize } = require('sequelize');

dotenv.config();

const app = express();
const router = require("./src/router/index");

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

const PORT = process.env.PORT || 3005;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const wss = new WebSocketServer({ server });


let playerlist=[];
(async()=>{
    playerlist = await playerModel.findOne({});
})()

wss.on('connection', async (ws) => {
    console.log('WebSocket connection');


    try {
        // const players = await broadcastUpdate(1);
        console.log("playerlist",playerlist)
        ws.send(JSON.stringify(playerlist));
    } catch (error) {
        console.error("Error fetching initial player data:", error);
    }

    // ws.on('message', async (message) => {
    //     console.log('Received:', message);
    // });

    // ws.on('close', () => {
    //     console.log('WebSocket connection closed');
    // });
});


broadcastUpdate = async (id) => {
    try {
        const player = await playerModel.findOne({ where: { id } });
        if (player) {
            wss.clients.forEach((client) => {
                if (client.readyState === client.OPEN) {
                    client.send(JSON.stringify(player));
                }
            });
        }
    } catch (error) {
        console.error("Error broadcasting update:", error);
    }
};


app.post('/update-player/score',async (req, res) => {
    try {
        const { id, action } = req.body;
        if (!id) {
            sendResponse('error', 401, 'Player id Missing', null, null, res);
            return;
        }

        if (!action) {
            sendResponse('error', 401, 'action Missing', null, null, res);
            return;
        }

        await playerModel.update({ action: action }, { where: { id } });
        await broadcastUpdate(id); // Broadcast the update to all clients
        sendResponse('success', 200, 'Action updated successfully', null, null, res);
    } catch (err) {
        console.log(err);
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
        } else {
            sendResponse('error', 500, 'Error updating Player Action', null, null, res);
        }
    }
});


