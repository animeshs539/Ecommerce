const product = require("../model/productsModel");

exports.getProducts = (req,res,next)=>{
    product.findAll()
    .then((products)=>{
        res.render("products",{
            products : products
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}