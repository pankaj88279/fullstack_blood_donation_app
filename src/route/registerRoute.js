const express=require('express');

const { registerController } = require('../controller/registerControllers');

const registerRoute=express.Router();


registerRoute.post('/register',registerController)


exports.registerRoute=registerRoute