const { Dc } = require("../models")


class DcController {
  static getHeroes(req, res) {
    const data = Dc.getDcs()
    res.status(200).json(data)
    return
  }

  static getHero(req, res) {
    const { id } = req.params
    const data = Dc.getOneDc(id)
    res.status(200).json(data)
    return
  }
}

module.exports = DcController