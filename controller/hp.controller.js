const Hp = require('../models');

class HpController {
  static getPhone(req, res) {
    const data = Hp.getHp();
    res.render('hp', { data: data });
    return;
  }

  static addData(req, res) {
    const { name, brand } = req.body;
    Hp.addData({ name, brand });

    res.redirect('/');
  }
}

module.exports = HpController;
