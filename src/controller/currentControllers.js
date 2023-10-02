const {user} = require("../model/user")


let currentController = async (req, res) => {

    try {
        const user= await user.findOne({id:req.body.userId})
        res.status(200).send({
            msg: "current_user data fetch successfully",
            user
        })
    }catch {
        res.status(200).send({
            msg: "current_user unsuccessfully",
        })
    }

}
exports.currentController=currentController
