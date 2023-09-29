const express = require('express')

const {register} = require("../model/user")
const bcrypt = require('bcrypt');


let registerController = async(req, res) => {
  const salt = 10;
  const hash =await bcrypt.hashSync(req.body.password, salt);
  
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