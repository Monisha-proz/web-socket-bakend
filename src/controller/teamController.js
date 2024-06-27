const { Sequelize, where } = require('sequelize');


const teamModel = require('../model/team.model');
const playerModel = require('../model/player.model');

const {sendResponse} = require('../utils/response')

/* GET TEAM */
exports.getTeam = async(req,res)=>{
    try{
        const whereClause = {
            is_active:1
        };
        const id = req.body?.teamid;
        if(id){
            whereClause.id =id
        }
        const teamCount = await teamModel.count({
            where: whereClause
        });

        const {count,rows} =await teamModel.findAndCountAll({
            where:whereClause,
            include: playerModel // Include the Player model to fetch associated players

        });
        sendResponse('success',200, '',teamCount,rows,res)

    }catch(err){
        if (err instanceof Sequelize.ValidationError) {
            sendResponse('error', 401, err.errors.map(e => e.message), null,null,res);
        }
        sendResponse('error', 500, 'Error fetching teams', null, null, res);


    }
}