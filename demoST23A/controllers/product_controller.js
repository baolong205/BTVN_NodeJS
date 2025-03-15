const Product = require("../models/product");
class ProductController {
  static async index(req, res) {
    const products = await Product.find({});
    res.render("products/index", { products });
  }
  static async new(req, res) {
    res.render("products/new");
  }

  static async create(req, res) {
    try {
      let { name, description } = req.body;
      const product = await Product.create({ name, description });
      res.redirect("/products");
    } catch (error) {
      res.render("products/new");
    }
  }

  static async delete(req, res) {
    let id = req.params.id;
    const product = await Product.deleteOne({ _id: id });
    console.log(product);
    res.json({ message: "Server Xoá thành công!!!!!!" });
  }


  static async edit(req, res) {
    try {
      let id = req.params.id;
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).send("Sản phẩm không tồn tại!");
      }
      res.render("products/edit", { product });
    } catch (error) {
      console.error("Lỗi khi tải trang chỉnh sửa:", error);
      res.status(500).send("Lỗi server khi tải trang chỉnh sửa");
    }
  }
  static async update(req, res) {
    try {
      let id = req.params.id;
      let { name, description, image } = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, image },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).send("Không tìm thấy sản phẩm để cập nhật!");
      }

      res.redirect("/products");
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
      res.status(500).send("Lỗi server khi cập nhật sản phẩm");
    }
  }

}
module.exports = ProductController;
