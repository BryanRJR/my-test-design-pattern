const { marvel_heroes } = require("../config/index")
class Marvel {
  static getMarvels() {
    return marvel_heroes
  }

  static getOneMarvels(id) {
    return marvel_heroes[id]
  }

  static addData(payload) {
    console.log(payload)
  }
}

module.exports = Marvel