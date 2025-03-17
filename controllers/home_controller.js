class HomeController {
  static index(req, res) {
    // let q = req.query.q;
    // let id = req.params.id;
    let params = req.body;
    // console.log(q);
    // console.log(id);
    console.log(params);

    res.render("index");
  }
}

module.exports = HomeController;
