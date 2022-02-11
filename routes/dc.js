// const express = require("express")
// const route = express.Router()
const route = require("express").Router()
const { DcController } = require("../controller")



route.get("/", DcController.getHeroes)
route.get("/:id", DcController.getHero)


module.exports = route