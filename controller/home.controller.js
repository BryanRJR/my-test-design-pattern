class HomeContoller {
  static home(req, res) {
    res.render('index');
  }
}

// class DcController {
//     static getHeroes(req, res) {
//       const data = Dc.getDcs();
//       res.status(200).json(data);
//       return;
//     }

module.exports = HomeContoller;
