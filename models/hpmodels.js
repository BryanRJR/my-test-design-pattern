const list_hp = require('../config/index');

class Hp {
  static getHp() {
    return list_hp;
  }

  static getOneHp(id) {
    return list_hp[id];
  }

  static addData(payload) {
    console.log(payload);
  }
}

module.exports = Hp;
