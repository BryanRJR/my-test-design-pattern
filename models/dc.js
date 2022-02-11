const { dc_heroes } = require("../config/index")
class Dc {
  static getDcs() {
    return dc_heroes
  }

  static getOneDc(id) {
    return dc_heroes[id]
  }
}

module.exports = Dc