const app = require("express")
const route = app.Router()
const { HomeContoller } = require("../controller")


route.get("/", HomeContoller.home)


module.exports = route

