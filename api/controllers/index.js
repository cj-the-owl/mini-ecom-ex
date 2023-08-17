const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const route = express.Router()
const {User} = require("../models/users")
const user = new User
const product = new Products()

// route.get("^/$|/mini-ecom-ex")

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

route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})

route.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
})

route.post('/product', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})

route.put('/product/:id', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})

route.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
})


module.exports = route