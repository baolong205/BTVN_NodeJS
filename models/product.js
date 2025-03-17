const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  quantity: Number,
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
