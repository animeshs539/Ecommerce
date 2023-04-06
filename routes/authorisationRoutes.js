const routes = require("express").Router();
const authorisationController = require("../controller/authorisationController");

routes.get('/signup',authorisationController.getsignup);
routes.post('/signup',authorisationController.postsignup);


module.exports = routes;