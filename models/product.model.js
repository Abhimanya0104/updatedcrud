const mongoose=require("mongoose")

const ProductSchema=mongoose.Schema({
    SNO:{
        type:Number,
        required:true,
        default:0
    },
    name:{
        type:String,
        required:[true,"please enter"],
    },
    registerNumber:{
        type:Number,
        required:true,
        default:0,
    },
    seniorname:{
        type:String,
        required:[true,"please enter"],
    },
    date:{
        type:Date,
        default:Date.now,
        
    },

    
    
})

const Product=mongoose.model("Product",ProductSchema);
module.exports=Product;