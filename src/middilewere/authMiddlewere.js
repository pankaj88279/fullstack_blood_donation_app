
let authAdmin=(req,res,next)=>{
    if(req.user.role!=='admin'){
        res.status(403).json({
            msg:"Unauthorized"
        })
    }else{
        next();
    }
}


exports.authAdmin=authAdmin