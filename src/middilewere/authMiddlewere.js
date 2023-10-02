var  JWT = require('jsonwebtoken');

const authMiddle = async (req, res, next) => {
    try {  
        const token =await req.headers['authorization'].split(" ")[1]
        JWT.verify(token, process.env.TENANT,(err,decode)=>{
            if(err){
                return res.status(404).json({
                    message:"Authentication faild1"
                })
            }else{
                req.body.userId =decode.userId
                next();
              
            }

        })
    }catch{
        return res.status(402).json({
            message:"Authentication faild"
        })
    }
}



let authAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        res.status(403).json({
            msg: "Unauthorized"
        })
    } else {
        next();
    }
}


exports.authAdmin = authAdmin
exports.authMiddle =authMiddle 