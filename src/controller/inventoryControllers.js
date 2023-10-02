const express = require('express')
const { inventory} = require("../model/inventory")
const {user} = require("../model/user")

let inventoryControllers = async (req, res) => {

        const { email, inventoryType } = req.body
        const userobj= await user.findOne({ email })
        if (!userobj) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        if (!inventoryType === 'in' && user.role !== 'doner') {
            return res.status(404).json({
                success: false,
                message: "Not a doner account"
            })
        }
        if (!inventoryType === 'out' && user.role !== 'hospitalName') {
            return res.status(404).json({
                success: false,
                message: "Not a hospital"
            })
        }
        // save record
        const inventoryobj = new inventory(req.body)
        console.log("req.body---->",inventoryobj )
        await inventoryobj.save()
            .then((d) => {
                res.status(200).send({
                    msg: "New Blood record add successfully",
                   
                    data:d
                })
            }).catch((err) => {
                res.status(200).send({
                    msg: "inventory not successfully",
                    e:err

                })
            })

}
exports.inventoryControllers = inventoryControllers
