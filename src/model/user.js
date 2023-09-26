const { mongoose } = require("../config/db");


let registeruser = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password: {
        type: String,
        required: true
    }
});

const user = mongoose.model('User', registeruser)

exports.user = user