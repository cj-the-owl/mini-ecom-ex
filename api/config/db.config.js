require("dotenv").config()

const { createPool } = createPool ({
    host: process.env.dbHost,
    database: process.env.dbDatabase,
    user: process.env.dbUser,
    password: process.env.dbPassword ,
    multipleStatements: true
})

module.exports = connection