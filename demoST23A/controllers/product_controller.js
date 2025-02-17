class ProductController {
  products = [
    {
      id: 1,
      name: "Product 1",
      description: "",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 2",
      description: "",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 3",
      description: "",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 4",
      description: "",
      image: "",
      price: 10000,
    },
    {
      id: 1,
      name: "Product 5",
      description: "",
      image: "",
      price: 10000,
    },
  ];
  static index(req, res) {
    res.render("index");
  }
}

module.exports = ProductController;
