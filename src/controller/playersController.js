const { Sequelize, where } = require('sequelize');
const playerModel = require('../model/player.model');
const teamModel = require('../model/team.model');
const auctionHistoryModel  =require('../model/AuctionHistory.model')
const { sendResponse } = require('../utils/response');
const auctionListModel = require('../model/AuctionHistory.model');
const {getYear} = require('../utils/calendar');
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

exports.retainedPlayer = async(req,res)=>{
    try{

        const { id, teamid} = req.body;
        if(!id){
            return sendResponse('error', 401, 'Player id Missing', null, null, res);
        }
        if(!teamid){
            return sendResponse('error', 401, 'Team id Missing', null, null, res);
        }
         const teamData = await teamModel.findOne({where:{id:teamid}});
         if(teamData?.dataValues?.retained ===1){
            return sendResponse('error', 401, 'Maximum only one player select retained ', null, null, res);
         }
         if(teamData?.dataValues?.no_players >14){
             return sendResponse('error', 401, "Already have 15 players in this team, couldn't add extra player", null, null, res);
            }
            const value = 4000;
            /* CREATE HISTORY */
            console.log("values",value);
            const auctionid = await auctionHistoryModel.create({
                playerid: parseInt(id),
                value,
                teamid,
                year: getYear()
            }); 
            console.log("auctionid",auctionid);
        /* ADD LIST */
        const autionList = await auctionListModel.findOne({ where: { playerid: id }, order: [['id', 'DESC']] });
        if (!autionList) {
            await auctionListModel.create({
                playerid: id,
                teamid,
                value,
                year: getYear(),
                auctionid: auctionid.id,
                is_retained:1
            });
        } else {
            // Logging values before update
            console.log('Updating auctionList with:', { value, teamid, year: getYear(), auctionid: auctionid.id });
            autionList.value =value;
            autionList.teamid =teamid;
            autionList.year =getYear();
            autionList.auctionid =auctionid.dataValues.id;
            autionList.is_retained=1;

            await autionList.save();
            
        }
        await playerModel.update({ is_sold:1,is_cancel:0, teamid }, { where: { id } });
        const increase_totalPlayer = Number(teamData.no_players) + 1;
        const increase_usedAmoung = Number(teamData.used_amount)+ Number(value)
        teamData.no_players = increase_totalPlayer;
        teamData.used_amount =increase_usedAmoung;
        teamData.is_retained =1;
        await teamData.save();
        
        sendResponse('success', 200, 'Retained Player added succesfully', null, null, res);

    }catch (err){
        console.log("err",err)
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
        } else {
            sendResponse('error', 500, 'Error get Player ', null, null, res);
        }

    }
}