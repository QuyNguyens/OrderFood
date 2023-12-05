const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userID:{type:mongoose.Types.ObjectId},
    productID:[mongoose.Types.ObjectId],
    amount:{type:Number},
    size:{type:String}
    
},{timestamps: true});

const cartModel = mongoose.model('cart',cartSchema);

module.exports = cartModel;