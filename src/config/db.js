const {mongoose }= require('mongoose');

require('dotenv').config();

//mongodb+srv://pankaj:pankaj@cluster0.4gb2s.mongodb.net/

mongoose.connect('mongodb+srv://pankaj:pankaj@cluster0.4gb2s.mongodb.net/')
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{
    console.log('disconnected to database')
})

exports.mongoose=mongoose