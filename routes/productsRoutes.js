const router = require("express").Router();
const productsController = require("../controller/productsController");


router.get("/products",productsController.getProducts);



module.exports = router;