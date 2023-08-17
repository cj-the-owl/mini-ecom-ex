require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.port || 8080
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { errorHandling } = require("./middleware/ErrorHandling")
const route = require("./controllers")

app.use(
    cors(),
    cookieParser(),
    express.json(),
    express.urlencoded({extended: false})
)

app.use(route)
app.use(errorHandling)

app.listen(port, () => {
    console.log(`
    Server is running on ${port}`)
})

