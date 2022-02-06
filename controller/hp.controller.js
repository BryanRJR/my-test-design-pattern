const Hp = require('../models');

class HpController {
  static getPhone(req, res) {
    const data = Hp.getHp();
    res.render('hp', { data: data });
    return;
  }

  static getOnePhone(req, res) {
    console.log('====== Get One HP =====');
    const id = req.params.id;
    const data = Hp.getOneHp(id);
    res.render(200).json({ name: 'HELLo' });
    return;
  }

  static addData(req, res) {
    const { name, brand } = req.body;
    Hp.addData({ name, brand });

    res.redirect('/');
  }
}

module.exports = HpController;
