const express=require('express');

const {currentController } = require('../controller/currentControllers');
const { authMiddle } = require('../middilewere/authMiddlewere');

const currentRoute=express.Router();


currentRoute.get('/current_user',authMiddle,currentController)


exports.currentRoute=currentRoute