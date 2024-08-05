const { Sequelize, where } = require('sequelize');
const jwt = require('jsonwebtoken');

const userModel = require('../model/user.model');
const {sendResponse} = require('../utils/response')

exports.login = async(req,res)=>{
    try{
        console.log('req',req)
        const {email, password} = req.body;
        const user = await userModel.findOne({where:{email,password}});
        if(!user){
            sendResponse('error', 403, 'Provide a valid login credential',null,user,res)

        }
        
        const token = jwt.sign({ userid: user.id }, process.env.JWT_SECRET);
        
        user.token = token;
        await user.save();
        console.log("user",user)
        sendResponse('success', 200, 'login Succesfully',null,user,res)
         
    }catch(err){
        console.log(err);
        if (!res.headersSent) {
            if (err instanceof Sequelize.ValidationError) {
                sendResponse('error', 401, err.errors.map(e => e.message), null, null, res);
            } else {
                sendResponse('error', 500, 'Error updating Player Action', null, null, res);
            }
        }
    

    }
}