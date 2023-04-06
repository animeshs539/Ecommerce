const routes = require("express").Router();
const authorisationController = require("../controller/authorisationController");

routes.get('/signup',authorisationController.getsignup);
routes.post('/signup',authorisationController.postsignup);

routes.get("/login",authorisationController.getLogin);
routes.post("/login",authorisationController.postLogin);


module.exports = routes;