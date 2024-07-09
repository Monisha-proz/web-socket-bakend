const { Sequelize } = require('sequelize');
const playerModel = require('../model/player.model');
const teamModel = require('../model/team.model');
const auctionHistoryModel  =require('../model/AuctionHistory.model')
const { sendResponse } = require('../utils/response');
// const { broadcastUpdate,check, server } = require('../../index'); // Adjust path if necessary


exports.getPlayers=async(req,res)=>{
    try{
        const players = await playerModel.findAll({
            include: [{
                model: teamModel,
                as: 'team',
                required: false // Use a left join
            }]
        });

        const result = await players.map(player => {
            if (player.dataValues.is_sold == 0  ) {
                delete player.dataValues.team;// Remove the team data
            }
            return player;
        });
        console.log("result",result)
        return sendResponse('success',200,null,null, result,res)

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

exports.auctionHistory = async (req,res)=>{
    try{
        const id = req.body.id;

        const history = await auctionHistoryModel.findAll({
            where:{playerid:id},
            include: [{
                model: teamModel,
                as: 'team',
                required: false // Use a left join
            }],
            order: [['id', 'DESC']]
        });
        return sendResponse('success',200,null,null, history,res)


    }catch(err){
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
        } else {
            sendResponse('error', 500, 'Error get Player ', null, null, res);
        }
    }
}