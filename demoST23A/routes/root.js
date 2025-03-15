const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/home_controller");
const ProductController = require("../controllers/product_controller");

router.get("/", HomeController.index);
router.get("/products", ProductController.index);
router.post("/products", ProductController.create);
router.get("/products/new", ProductController.new);
router.get("/products/delete/:id", ProductController.delete);
router.get("/:id", HomeController.index);
router.get('/products/edit/:id', ProductController.edit)
router.post('/products/update/:id', ProductController.update)
module.exports = router;
