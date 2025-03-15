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

module.exports = router;
