const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{
    console.log('disconnected to database')
})

exports.mongoose=mongoose