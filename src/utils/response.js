exports.sendResponse = async(status='success',statusCode=200,message,count, data,res)=>{
    return  res.status(statusCode).json({
      status,
        message,
        count,
        data: data
      });
    
}