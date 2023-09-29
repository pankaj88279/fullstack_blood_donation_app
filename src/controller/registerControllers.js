const express = require('express')

const { register } = require("../model/user")
const bcrypt = require('bcrypt');


let registerController = async (req, res) => {
  const exitinguser = await register.findOne({ email: req.body.email })
  if (exitinguser) {
  //  console.log("Email already registeres")
    return res.status(404).json({
      success:false,
      message: "Email already registeres"
    })
  }
  const salt = 10;
  const hash = await bcrypt.hashSync(req.body.password, salt);

  req.body.password = hash
  const userobj = new register(req.body)
  userobj.save()
    .then((d) => {
      res.status(200).json({
        msg: "User registration  successfully",
        data: d
      })
    })
    .catch((e) => {
      res.status(403).json({
        msg: " User registration not successfully",
        err: e
      })
    })

}


exports.registerController = registerController