const express=require('express');

const { inventoryControllers } = require('../controller/inventoryControllers');
const { authMiddle } = require('../middilewere/authMiddlewere');

const inventoryRoute=express.Router();


inventoryRoute.post('/create-inventory',authMiddle,inventoryControllers)


exports.inventoryRoute=inventoryRoute