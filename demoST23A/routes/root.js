const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/home_controller");

router.get("/:id", HomeController.index);
router.post("/:id", HomeController.index);

module.exports = router;
