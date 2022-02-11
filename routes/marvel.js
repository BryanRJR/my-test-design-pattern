// const express = require("express")
// const route = express.Router()
const route = require("express").Router()
const { MarvelController } = require("../controller")
const midd = require("../middleware")


// route.get("/test/:id", (req, res) => {
//   console.log(req.params)
//   console.log(req.query)
//   res.send("TEST")
// })

route.get("/test", MarvelController.getHeroes)
route.get("/:id", midd, MarvelController.getHero)

route.use(midd)
route.post("/", MarvelController.addData)

module.exports = route