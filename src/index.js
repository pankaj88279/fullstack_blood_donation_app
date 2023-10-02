
const express =require('express');
const cors = require('cors')
const { registerRoute } = require('./route/registerRoute');
const { loginRoute } = require('./route/loginRoute');
const { currentRoute } = require('./route/currentRoute');
const { inventoryRoute } = require('./route/inventoryRoute');
const app=express();

require('dotenv').config();
app.use(cors())
app.use(express.json());

app.use('/api',registerRoute)
app.use('/api',loginRoute)
app.use('/api',currentRoute)
app.use('/api',inventoryRoute)

const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})