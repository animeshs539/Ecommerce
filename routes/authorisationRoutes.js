const routes = require("express").Router();


routes.get('/signup',(req,res,next)=>{
    res.send("signup");
})


module.exports = routes;