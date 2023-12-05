const orderModel = require('../models/order');
const createErr = require('../utils/createErr');
const createOrder = async (req,res) =>{
    const newOrder = {
        ...req.body,
        productID: [    ]
    }
    const order = await orderModel.create(req.body);
    if(order){
        res.status(200).json(order);
    }else{
        res.json(createErr(401,"failed to create!!!"));
    }
}

module.exports = {createOrder};