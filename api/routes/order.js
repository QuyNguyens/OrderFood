const express = require('express');
const route = express.Router();
const {createOrder} = require('../controllers/order');
route.post('/create',createOrder);
module.exports = route;