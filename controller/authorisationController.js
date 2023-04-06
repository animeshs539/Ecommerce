const user = require("../model/userModel");
const bcryptjs = require("bcryptjs");

exports.getsignup = (req,res,next)=>{
        res.render("signup");
}

exports.postsignup = (req,res,next)=>{
    user.findAll({
        where : {
            email : req.body.email
        }
    })
    .then((User)=>{
        if(User[0]){
            res.redirect("/");
        }
        else{
            bcryptjs.hash(req.body.password,7).then((hashedPassword)=>{
                user.create({
                    name : req.body.name,
                    email : req.body.email,
                    password : hashedPassword
                }).then((msg)=>{
                    res.redirect("/login");
                })
            })
            
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}


exports.getLogin = (req,res,next)=>{
    res.render("login");
}

exports.postLogin = (req,res,next)=>{
    user.findAll({
        where : {
            email : req.body.email
        }
    }).then((User)=>{
        if(User[0]){
            bcryptjs.compare(req.body.password,User[0]["password"]).then((result)=>{
                if(result){
                    res.redirect("/products")
                }
                else{
                    res.render("login",{
                        result : result
                    })
                }
            })
        }
        else{
            res.redirect("/signup");
        }
    })
}
