const formatter = require('../helpers/responseFormatter');


exports.GET_INDEX = (req,res,next)=>{
    return res.status(200).json('Welcome to Express!')
}