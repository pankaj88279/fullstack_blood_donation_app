const { user } = require("../model/user")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

let loginController = async (req, res) => {
    const { email, password } = req.body
    try {

        // Find the user by email in the database
        const userobj = await user.findOne({ email });

        console.log('userobj --->', userobj)
        if (!userobj) {
            return res.status(401).json({ msg: 'User not found' });
        }
        const pass = bcrypt.compareSync(password, userobj.password); // true
        if (!pass) {
            return res.status(401).json({ msg: 'invalid password' });
        }
        const token = jwt.sign({ email: userobj.email,role:userobj.role}, process.env.TENANT)
        res.status(200).json({
            msg: "login successfully",
            token: token,
            role:userobj.role
        })

    } catch {
        res.status(200).json({
            msg: "login unsuccessfully",


        })
    }







}


exports.loginController = loginController