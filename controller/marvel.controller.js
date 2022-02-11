const { Marvel } = require("../models")


class MarvelController {
  static getHeroes(req, res) {
    console.log("====get all heroes ==")
    console.log(req.query)
    const data = Marvel.getMarvels()
    res.render("marvel", { data: data })
    return
  }

  static getHero(req, res) {
    const id = req.params.id
    const data = Marvel.getOneMarvels(id)
    res.status(200).json(data)
    return
  }

  static addData(req, res) {
    const { name, role } = req.body
    Marvel.addData({ name, role })
    if (name == "dc") {
      res.send()
    }
    res.redirect("/")
  }
}

module.exports = MarvelController