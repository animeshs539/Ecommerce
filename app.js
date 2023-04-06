const express = require("express");
const authorisationRoutes = require("./routes/authorisationRoutes");
const Sequelize = require("sequelize");
const sequelize = require('./util/database');
const bodyParser = require("body-parser");




app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));

app.use(authorisationRoutes);

sequelize.sync()
.then(()=>{
    app.listen("3000");
})
.catch((err)=>{
    console.log(err);
})
