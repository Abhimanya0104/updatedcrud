const Product=require('../models/product.model.js')

const getProducts=async (req,res)=>
{
    try{
        const products=await Product.find({});
        res.status(200).json(products);
        
        }catch(error){
            res.status(500).json({message:error.message})
           }}

          


const getProduct=async(req,res)=>{
    try{
       const{id}=req.params;
       const product=await Product.findById(id);
       res.status(200).json(product);
    
    
      
    }catch(error){
        res.status(500).json({message:error.message})
       }
    }
const createProducts=async(req,res)=>
{
   try{
   const product= await Product.create(req.body)
   res.status(200).json(product);


   }catch(error){
    res.status(500).json({message:error.message})
   }
}

const updatedProduct=async(req,res)=>{
    try{
       const{id}=req.params;
       const product=await Product.findByIdAndUpdate(id,req.body);
       if(!product){
        return res.status(404).json({message:"product not found"}
        )

       }
       const updatedProduct=await Product.findById(id);
       res.status(200).json(product);
    
    
      
    }catch(error){
        res.status(500).json({message:error.message})
       }
    }


const deleteProduct=async(req,res)=>{
    try{
       const{id}=req.params;
       const product=await Product.findByIdAndDelete(id,req.body);
       if(!product){
        return res.status(404).json({message:"product not found"}
        )

       }
       const updatedProduct=await Product.findById(id);
       res.status(200).json(product);
    
    
      
    }catch(error){
        res.status(500).json({message:error.message})
       }
    }



    const viewlist = async (req, res) => {
        try {
            const products = await Product.find({});
            res.render('index', { products: products }); // Pass the 'products' array to the template
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    
    


module.exports={
    getProducts,
    getProduct,
    createProducts,
    updatedProduct,
    deleteProduct,
    viewlist,
};