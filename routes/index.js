const route = require("express").Router()
const dcRouter = require("./dc")
const marvelRouter = require("./marvel")
const homeRouter = require("./home")


route.use('/marvel', marvelRouter)
route.use('/dc', dcRouter)
route.use("/", homeRouter)


module.exports = route