const productModel = require('../models/product');
const catalogyModel = require('../models/catalogy');
const cartModel = require('../models/cart');
const createErr = require('../utils/createErr');
const createProduct = async (req,res) =>{
    console.log('req: ',req.body)
    const catalogy = await catalogyModel.findOne({name:req.body.catalogy});
    console.log('catalogy:',catalogy)
    const newProduct = {
        ...req.body,
        image:req.body.imgUpload,
        catalogyId: catalogy._id
    }
    const product = await productModel.create(newProduct);
    res.status(200).json(product);
}
const getOne = async (req,res) =>{
    console.log(req.query.sizeAll);
    const product = await productModel.findById(req.params.id);
    console.log('product: ',product);
    if(product){
        res.status(200).json(product);
    }else{
        res.json(createErr(401,"not found product!!!"));
    }
}
const getAll = async (req,res) =>{
    const product = await productModel.find({});
    //const catalogyIds = product.map((data) => data.catalogyId);
    if(product){
        res.status(200).json(product);
    }else{
        res.json(createErr(401,"not found product!!!"));
    }
}
const getCatalogy = async (req,res) =>{
    const catalogy = await catalogyModel.find({});
    if(catalogy){
        res.status(200).json(catalogy);
    }else{
        res.json(createErr(400,"not founded catalogy!!!"));
    }
}
const updateProduct = async (req,res) =>{
    const product = await productModel.findById(req.params.id);
    if(product){
        const updatePro = await productModel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        if(updatePro){
            res.status(200).json(updatePro);
        }else{
            res.json(createErr(400,"update failed!!!"));
        }   
    }else{
        res.json(createErr(400,"not founded catalogy!!!"));
    }
}
const addCart = async (req,res) =>{
    const cart = await cartModel.findOne({productID:req.body.productID,size:req.body.size});
    let newcart
    if (cart){
        newcart = await cartModel.findByIdAndUpdate(cart._id,{amount: (req.body.amount+cart.amount) });
    }else{
        newcart = await cartModel.create(req.body);
    }
    res.status.json(newcart);
}
module.exports = {createProduct,getOne,getAll,getCatalogy,updateProduct,addCart}