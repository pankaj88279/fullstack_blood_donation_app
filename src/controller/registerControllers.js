const { user } = require("../model/user")
const bcrypt = require('bcrypt');
const salt = 10;


let registerController = (req, res) => {
 
  const hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password=hash
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