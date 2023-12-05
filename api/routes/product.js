const express = require("express");
const route = express.Router();

const {createProduct,getOne,getAll,getCatalogy,updateProduct,addCart} = require('../controllers/product');

route.get('/get/:id', getOne);
route.get('/gets', getAll);
route.get('/catalogy', getCatalogy);
route.post('/create',createProduct);
route.post('/update/:id',updateProduct);
route.post('/add-cart',addCart)
module.exports = route;