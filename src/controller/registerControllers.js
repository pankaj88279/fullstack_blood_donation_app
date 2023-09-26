const { user } = require("../model/user")


let registerController = (req, res) => {
  const userobj = new user(req.body)
  userobj.save()
    .then((d) => {
      res.status(200).json({
        msg: "registration  successfully",
        data:d
      })
    })
    .catch((e) => {
        res.status(200).json({
        msg: "registration  successfully",
        err:e
      })
    })

}


exports.registerController = registerController