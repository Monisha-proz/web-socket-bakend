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
const { authValidate } = require("./src/utils/authValidate");

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 3005;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const wss = new WebSocketServer({ server });


let playerlist=[];
(async()=>{
    const playerdata = await playerModel.findOne({where:{is_sold:0,is_cancel:0},
        include:[{
        model:teamModel,
        attributes:['id','profile_url'],            
        where: {}
    }],
    order: [['id', 'ASC']],
});
    const playerlists = await auctionListModel.findOne({where:{playerid:1}}) ;
    const  data ={
        ...playerdata.dataValues,
        value:playerlists?.dataValues?.value ||0
    }
    playerlist =data;
})()

wss.on('connection', async (ws) => {


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


broadcastUpdate = async (id,isBreak) => {
    try {
        let player ;
        if(id){
            player = await playerModel.findOne({ where: { id },include:[{
               model:teamModel,
               attributes:['id','profile_url'],            
               where: {}
           }] });

        }else{
            player = await playerModel.findOne({ where: { is_sold:0,is_cancel:0 },include:[{
                model:teamModel,
                attributes:['id','profile_url'],            
                where: {}
            }],
            order: [['id', 'ASC']],


         });
            
        }

        const playerlists = await auctionListModel.findOne({where:{playerid:player.dataValues.id}}) ;
    const  data ={
        ...player.dataValues,
        value:playerlists?.value
    }
        // if (player) {
            wss.clients.forEach((client) => {
                if (client.readyState === client.OPEN) {
                    const resData = {
                        isBreak,
                        data
                    }                    
                    
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
        const { id, value, isBreak, changed, is_sold, teamid,is_cancel } = req.body;
        const token = req?.headers?.token;
        await authValidate(token, res);
        if(is_cancel===1 ||is_cancel==="1"){
            await playerModel.update({is_cancel:1},{where:{id}});
            sendResponse('success', 200, 'Player Closed Succefully', null, null, res);

        }

        if (changed === false || changed === 'false') {
            if (!id) {
                return sendResponse('error', 401, 'Player id Missing', null, null, res);
            }

            if (!value) {
                return sendResponse('error', 401, 'Auction value Missing', null, null, res);
            }

            if (!teamid) {
                return sendResponse('error', 401, 'Teamid Missing', null, null, res);
            }

            if (is_sold == 0) {
                const history = await auctionHistoryModel.findAll({ where: { playerid: id }, order: [['id', 'DESC']] });
                if (history && history[0]?.dataValues?.value >= value) {
                    return sendResponse('error', 401, `Provide greater value than ${history[0].dataValues.value}`, null, null, res);
                }
            }

            const totalPlayer = await teamModel.findOne({ where: { id: teamid } });
            if (totalPlayer.no_players > 14) {
                return sendResponse('error', 401, `Already have 15 players in this team, couldn't add extra player`, null, null, res);
            }

            const auctionid = await auctionHistoryModel.create({
                playerid: id,
                value,
                teamid,
                year: getYear()
            });

            const autionList = await auctionListModel.findOne({ where: { playerid: id }, order: [['id', 'DESC']] });
            
            // Logging the autionList to debug
            console.log('autionList:', autionList);

            if (!autionList) {
                await auctionListModel.create({
                    playerid: id,
                    teamid,
                    value,
                    year: getYear(),
                    auctionid: auctionid.id,
                });
            } else {
                // Logging values before update
                console.log('Updating auctionList with:', { value, teamid, year: getYear(), auctionid: auctionid.id });
                autionList.value =value;
                autionList.teamid =teamid;
                autionList.year =getYear();
                autionList.auctionid =auctionid.dataValues.id;
                await autionList.save();
                // await auctionListModel.update({
                //     value,
                //     teamid,
                //     year: getYear(),
                //     auctionid: auctionid.id
                // }, { where: { id: autionList.dataValues.id } });
            }

            await playerModel.update({ is_sold:0, teamid }, { where: { id } });
            if (is_sold == 1) {
                await playerModel.update({ is_sold, teamid }, { where: { id } });

                const increase_totalPlayer = Number(totalPlayer.no_players) + 1;
                const increase_usedAmoung = Number(totalPlayer.used_amount)+ Number(value)
                totalPlayer.no_players = increase_totalPlayer;
                totalPlayer.used_amount =increase_usedAmoung;
                await totalPlayer.save();
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




