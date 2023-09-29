const express = require('express')

const { register } = require("../model/user")
const bcrypt = require('bcrypt');


let registerController = async (req, res) => {
  const exitinguser = await register.findOne({ email: req.body.email })
  if (exitinguser) {
    console.log("Email already registeres"),
    res.status(404).json({
     
      message: "Email already registeres"
    })
    return false
  }
  const salt = 10;
  const hash = await bcrypt.hashSync(req.body.password, salt);

  req.body.password = hash
  const userobj = new register(req.body)
  userobj.save()
    .then((d) => {
      res.status(200).json({
        msg: "registration  successfully",
        data: d
      })
    })
    .catch((e) => {
      res.status(403).json({
        msg: "registration not successfully",
        err: e
      })
    })

}


exports.registerController = registerController