const {mongoose} = require("../config/db");


let registeruser = new mongoose.Schema({
    firstName: String,

    lastName: String,

      email: {
        type: String,
        required: true,
        unique: true,
      },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum : ['admin','enduser'],
        default: 'admin'
    }
});

const register= mongoose.model('Register', registeruser)

exports.register = register;