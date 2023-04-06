const express = require("express");
const authorisationRoutes = require("./routes/authorisationRoutes");
const Sequelize = require("sequelize");
const sequelize = require('./util/database');




app = express();
app.set("view engine","ejs");

app.use(authorisationRoutes);

sequelize.sync()
.then(()=>{
    app.listen("3000");
})
.catch((err)=>{
    console.log(err);
})
