require("dotenv").config()
const { createPool } = require("mysql")
const connection = createPool ({
    host: process.env.dbHost,
    database: process.env.dbDatabase,
    user: process.env.dbUser,
    password: process.env.dbPassword ,
    multipleStatements: true
})

module.exports = connection