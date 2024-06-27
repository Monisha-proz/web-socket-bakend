const { Sequelize, where } = require('sequelize');


const teamModel = require('../model/team.model');
const playerModel = require('../model/player.model');

const {sendResponse} = require('../utils/response');


// const { wss, playerData } = require('../../index'); // Import the WebSocket server instance



exports.updatePlayerScore = async(req,res)=>{
    try{
        const { id, score } = req.body;
        if(!id){
            sendResponse('error', 401, 'Player id Missing', null,null,res);
        }

        if(!score){
            sendResponse('error', 401, 'Score Missing', null,null,res);

        }
        
        
        await playerModel.update({action:score},{where:{id}});
        // await broadcastUpdate(id); // Broadcast the update to all clients
        
    }catch(err){
        console.log(err)
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null,null,res);
        }
        sendResponse('error', 500, 'Error fetching Player', null, null, res);
    }
}


const broadcastUpdate = async(id) => {
    const player = await playerModel.findOne({ where: { id } });

    if (player) {
        // Update playerData array with the latest data
        // playerData = playerData.map(players => (players.id == id ? player : players));
        console.log(wss)
        wss.clients.forEach((client) => {
            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify(player));
            }
        });
    }
};
