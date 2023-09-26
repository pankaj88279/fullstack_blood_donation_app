const mongoose = require('mongoose');
//mongodb+srv://pankaj:pankaj@cluster0.4gb2s.mongodb.net/
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.4gb2s.mongodb.net/`)
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{
    console.log('disconnected to database')
})

exports.mongoose=mongoose