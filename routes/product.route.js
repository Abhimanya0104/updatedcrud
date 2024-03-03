const express=require("express")

const Product=require('../models/product.model.js')
const router=express.Router();
const {getProducts,getProduct,createProducts,updatedProduct,deleteProduct,viewlist}=require('../controllers/product.controllers.js')

router.get('/',getProducts);

router.get('/:id',getProduct);

router.post('/',createProducts);

router.put('/:id',updatedProduct);

router.delete('/:id',deleteProduct);

router.get('/index', viewlist);

    




module.exports=router;