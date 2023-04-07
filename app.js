const express = require("express");
const authorisationRoutes = require("./routes/authorisationRoutes");
const productsRoutes = require("./routes/productsRoutes");
const Sequelize = require("sequelize");
const sequelize = require('./util/database');
const bodyParser = require("body-parser");
const user = require("./model/userModel");
const product = require("./model/productsModel");




app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));

app.use(authorisationRoutes);
app.use(productsRoutes);

sequelize.sync()
.then(()=>{
    app.listen("3000");
})
.catch((err)=>{
    console.log(err);
})
