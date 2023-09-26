
const express =require('express');

const { registerRoute } = require('./route/registerRoute');
const { loginRoute } = require('./route/loginRoute');
const app=express();

require('dotenv').config();

app.use(express.json());

app.use('/api',registerRoute)
app.use('/api',loginRoute)


const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})