const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const route = express.Router()
const {User} = require("../models/users")
const user = new User

route.post("/login", bodyParser.json(), (req, res) => {
    user.login(req, res)
})

route.get("/user/:id", bodyParser.json(), (req, res) => {
    user.fetchUser(req, res)
})

route.get("/users", (req, res) => {
    user.fetchUsers(req, res)
})

route.post("/register", bodyParser.json(), (req, res) => {
    user.createUser(req, res)
})

route.put("/user/:id", bodyParser.json(), (req, res) => {
    user.updateUser(req, res)
})

route.delete("/user/:id", bodyParser.json(), (req, res) => {
    user.deleteUser(req, res)
})

modules.export = route