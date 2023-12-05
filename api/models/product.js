const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{type:String},
    discount:{type:Number},
    price:{type:Number},
    desc:{type:String},
    image:{type:String},
    catalogyId: mongoose.Types.ObjectId,
    sizeAll:[
        {size:String,extra:Number}
    ]
    
},{timestamps: true});

const productModel = mongoose.model('product',productSchema);

module.exports = productModel;