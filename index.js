const express = require("express");
var bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const port = 3000;
const RootRoute = require("./routes/root");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("", RootRoute);

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/products", (req, res) => {
  res.render("product");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
