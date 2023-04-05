const express = require("express");
const authorisationRoutes = require("./routes/authorisationRoutes");



app = express();
app.set("view engine","ejs");

app.use(authorisationRoutes);


app.listen("3000");