// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { WebSocketServer } = require('ws');
const playerModel = require('./src/model/player.model');
const auctionHistoryModel = require('./src/model/AuctionHistory.model');
const auctionListModel = require('./src/model/AuctionList.model');
const teamModel = require('./src/model/team.model');
const { sendResponse } = require('./src/utils/response');
const {getYear} = require('./src/utils/calendar')

const { Sequelize, where } = require('sequelize');

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
    const playerdata = await playerModel.findOne({where:{id:1},include:[{
        model:teamModel,
        attributes:['profile_url'],            
        where: {}
    }]});
    const playerlists = await auctionListModel.findOne({where:{playerid:1}}) ;
    const  data ={
        ...playerdata.dataValues,
        value:playerlists?.dataValues?.value ||700
    }
    console.log("data",data)
    playerlist =data;
})()

wss.on('connection', async (ws) => {
    console.log('WebSocket connection');


    try {
        // const players = await broadcastUpdate(1);
        const resData = {
            isBreak:false,
            data: playerlist
        }
        ws.send(JSON.stringify(resData));
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


broadcastUpdate = async (id=1,isBreak) => {
    console.log("id",id)
    try {
        const player = await playerModel.findOne({ where: { id },include:[{
            model:teamModel,
            attributes:['profile_url'],            
            where: {}
        }] });
        console.log("player",player)
        const playerlists = await auctionListModel.findOne({where:{playerid:id}}) ;
    const  data ={
        ...player.dataValues,
        value:playerlists?.value
    }
    console.log("data",data)
        console.log("player",player)
        // if (player) {
            wss.clients.forEach((client) => {
                if (client.readyState === client.OPEN) {
                    const resData = {
                        isBreak,
                        data
                    }                    
                    console.log("resData",resData)
                    
                    client.send(JSON.stringify(resData));
                }
            });
        // }else{
        //     console.log('player not valid')

        // }
    } catch (error) {
        console.error("Error broadcasting update:", error);
    }
};


app.post('/update-player/score', async (req, res) => {
    try {
        const { id, value, isBreak, changed, is_sold, teamid } = req.body;

        if (changed === false || changed === 'false') {

            if (!id) {
                return sendResponse('error', 401, 'Player id Missing', null, null, res);
            }

            if (!value) {
                console.log("value", value);
                return sendResponse('error', 401, 'Auction value Missing', null, null, res);
            }

            if (!teamid) {
                return sendResponse('error', 401, 'Teamid Missing', null, null, res);
            }

            const history = await auctionHistoryModel.findAll({ where: { playerid: id }, order: [['id', 'DESC']] });
            if (history &&history[0]?.dataValues?.value >= value) {
                return sendResponse('error', 401, `Provide greater value than ${history[0].dataValues.value}`, null, null, res);
            }

            const auctionid = await auctionHistoryModel.create({
                playerid: id,
                value,
                teamid,
                year: getYear()
            });
            const autionList = await auctionListModel.findOne({ where: { playerid: id }, order: [['id', 'DESC']] });
                if (!autionList) {
                    await auctionListModel.create({
                        playerid: id,
                        teamid,
                        value,
                        year: getYear(),
                        auctionid: auctionid.id,
                    });
                } else {
                    await auctionListModel.update({
                        value,
                        teamid,
                        year: getYear(),
                        auctionid: auctionid.id
                    }, { where: { id: autionList.dataValues.id } });
                }
            

            if (is_sold == 1) {
                console.log("auctionid", auctionid.id);
                

                await playerModel.update({ is_sold,teamid }, { where: { id } });  // Fix the where clause here
               const totalPlayer= await teamModel.findOne({where:{id:teamid}});
                const increase_totalPlayer = Number(totalPlayer.no_players)+1;
                // await teamModel.update(increase_totalPlayer,{where:{id:teamid}})
                totalPlayer.no_players =increase_totalPlayer;
                await totalPlayer.save()

            }
        }

        await broadcastUpdate(id, isBreak); // Broadcast the update to all clients
        if (!res.headersSent) {
            sendResponse('success', 200, 'Action updated successfully', null, null, res);
        }
    } catch (err) {
        console.log(err);
        if (!res.headersSent) {
            if (err instanceof Sequelize.ValidationError) {
                sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
            } else {
                sendResponse('error', 500, 'Error updating Player Action', null, null, res);
            }
        }
    }
});



