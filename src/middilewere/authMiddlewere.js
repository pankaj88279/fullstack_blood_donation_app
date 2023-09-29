var jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].spit(" ")[1]
        JWT.verify(token, process.env.TENANT,(err,decode)=>{
            if(err){
                return res.status(404).json({
                    message:"Authentication faild"
                })
            }else{
               next();
            }

        })
    } catch (error) {
        return res.stutes(401).json({
            success: false,
            message: "Authentication failes",
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