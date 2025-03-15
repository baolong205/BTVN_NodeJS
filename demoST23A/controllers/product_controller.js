const Product = require("../models/product");
class ProductController {
  static async index(req, res) {
    const products = await Product.find({});
    res.render("products/index", { products });
  }
  static async delete(req, res) {
    let id = req.params.id;
    const product = await Product.deleteOne({ _id: id });
    console.log(product);
    res.json({ message: "Server Xoá thành công!!!!!!" });
  }
}

module.exports = ProductController;
