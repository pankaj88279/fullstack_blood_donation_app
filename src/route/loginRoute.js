const express=require('express');

const {loginController } = require('../controller/loginControllers');

const loginRoute=express.Router();


loginRoute.post('/login',loginController)


exports.loginRoute=loginRoute