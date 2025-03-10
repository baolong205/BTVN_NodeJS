class ProductController {
  static products = [
    {
      id: 1,
      name: "Product 1",
      description: "description Product 1",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 2",
      description: "description Product 2",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 3",
      description: "description Product 3",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 4",
      description: "description Product 4",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 5",
      description: "description Product 5",
      image: "",
      price: 10000,
    },
  ];

  static index(req, res) {
    res.render("products/index", { products: ProductController.products });
  }
}

module.exports = ProductController;
