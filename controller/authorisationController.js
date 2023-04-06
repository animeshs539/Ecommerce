const user = require("../model/userModel");

exports.getsignup = (req,res,next)=>{
        res.render("signup");
}

exports.postsignup = (req,res,next)=>{
    res.redirect("/");
}