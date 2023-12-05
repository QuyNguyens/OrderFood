const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    fullname: {type:String},
    phone: {type:String},
    address: {type:String},
    status: {type:Boolean},
    productID: [mongoose.Types.ObjectId],
    amount:[Number],
    totalMoney: {type:Number},
    receive:{type:Boolean},
},{timestamps: true});

const orderModel = mongoose.model('order',orderSchema);

module.exports = orderModel;