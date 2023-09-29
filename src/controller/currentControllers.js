

let currentController = async (req, res) => {
    try {
        res.status(200).send({
            msg: "current_user successfully",
            
        })
    }catch {
        res.status(200).send({
            msg: "current_user unsuccessfully",
        })
    }

}
exports.currentController=currentController
