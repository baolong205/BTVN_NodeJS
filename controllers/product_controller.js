const Product = require("../models/product");
class ProductController {
  static async index(req, res) {
    try {
        const limit = 5; // Số sản phẩm mỗi trang
        let page = parseInt(req.query.page) || 1; 
        let skip = (page - 1) * limit; 

        const q = req.query.q || ""; 
        const minPrice = parseFloat(req.query.minPrice) || 0; 
        const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_VALUE;

        let filter = { price: { $gte: minPrice, $lte: maxPrice } };

        if (q) {
            filter.name = { $regex: q, $options: "i" };
        }

        // Đếm tổng số sản phẩm
        let count = await Product.countDocuments(filter);
        let pages = Math.ceil(count / limit); 

        if (page > pages && pages > 0) {
            page = pages;
            skip = (page - 1) * limit;
        }

        let products = await Product.find(filter).skip(skip).limit(limit);

        res.render("products/index", {
            products,
            pages,
            currentPage: page,
            q,
            minPrice: req.query.minPrice || "",
            maxPrice: req.query.maxPrice || ""
        });
    } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        res.status(500).send("Lỗi server khi lấy danh sách sản phẩm.");
    }
}
  static async new(req, res) {
    res.render("products/new");
  }

  static async create(req, res) {
    try {
        let { name, description, image, price, quantity } = req.body;

        if (!name || !price || !quantity) {
            return res.status(400).send("Vui lòng nhập đầy đủ thông tin!");
        }

        const product = await Product.create({ name, description, image, price, quantity });
        res.redirect("/products"); // Chuyển hướng về danh sách sản phẩm
    } catch (error) {
        console.error("Lỗi khi tạo sản phẩm:", error);
        res.status(500).send("Lỗi server khi tạo sản phẩm.");
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

  // Cập nhật sản phẩm
  static async update(req, res) {
    try {
        let id = req.params.id;
        let { name, description, image, price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, description, image, price },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).send("Không tìm thấy sản phẩm để cập nhật!");
        }

        res.redirect("/products"); // Chuyển hướng về danh sách sản phẩm
    } catch (error) {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
        res.status(500).send("Lỗi server khi cập nhật sản phẩm");
    }
}
}

module.exports = ProductController;
