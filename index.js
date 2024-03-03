const express = require("express");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));

app.use(express.json({}));
app.use(
    express.json({
        extended: true,
    })
);

app.set('view engine','ejs');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://23b102:kitkat102@backenddb.cddx62d.mongodb.net/?retryWrites=true&w=majority&appName=backenddb')
.then(()=>
{
    console.log("connected")

})
.catch(()=>{
    console.log("failed")
}
)



// routes
app.use("/api/products", productRoute);

app.use('/', productRoute);
app.use('/index',productRoute);

app.listen(3000,()=>
{
    console.log("server running")
})



app.get("/",(req,res)=>
{
    res.send("hello from abhimanya")
})






