const userModel = require('../model/user.model');
const {sendResponse} = require('./response')
exports.authValidate =async(token,res)=>{
    const validate = await userModel.findOne({where:{token}});
    if(!validate){
         sendResponse('error',403,'This page Login another user','','',res)
    }
    return true

}