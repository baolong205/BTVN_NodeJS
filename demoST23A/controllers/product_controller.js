const Product = require("../models/product");
class ProductController {
  static async index(req, res) {
    const products = await Product.find({});
    res.render("products/index", { products });
  }
}

module.exports = ProductController;
