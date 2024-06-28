const { Sequelize } = require('sequelize');
const playerModel = require('../model/player.model');
const { sendResponse } = require('../utils/response');
// const { broadcastUpdate,check, server } = require('../../index'); // Adjust path if necessary


exports.getPlayers=async(req,res)=>{
    try{
        const player = await playerModel.findAll({});
        return sendResponse('success',200,null,null, player,res)

    }catch(err){
        console.log(err);
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
        } else {
            sendResponse('error', 500, 'Error get Player ', null, null, res);
        }
    }
}
exports.getPlayer=async(req,res)=>{
    try{
        const player = await playerModel.findOne({});
        return sendResponse('success',200,null,null, player,res)

    }catch(err){
        console.log(err);
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
        } else {
            sendResponse('error', 500, 'Error get Player ', null, null, res);
        }
    }
}
exports.updatePlayerScore = async (req, res) => {
    try {
        console.log("server",server)
        const { id, score } = req.body;
        if (!id) {
            sendResponse('error', 401, 'Player id Missing', null, null, res);
            return;
        }

        if (!score) {
            sendResponse('error', 401, 'Score Missing', null, null, res);
            return;
        }

        await playerModel.update({ action: score }, { where: { id } });
        check()
        await broadcastUpdate(id); // Broadcast the update to all clients
        sendResponse('success', 200, 'Score updated successfully', null, null, res);
    } catch (err) {
        console.log(err);
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
        } else {
            sendResponse('error', 500, 'Error updating Player score', null, null, res);
        }
    }
};
