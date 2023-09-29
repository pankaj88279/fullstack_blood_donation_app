const express=require('express');

const {currentController } = require('../controller/currentControllers');

const currentRoute=express.Router();


currentRoute.get('/current_user',currentController)


exports.currentRoute=currentRoute