const express = require("express")
const http = require("http")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const dishRouter = require("dishRouter")
const hostname = "localhost"
const port = 8080

const app = express()

app.use(express.static(__dirname + "/public"))
app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/dishes", dishRouter)
app.use((req, res, next) => {
  res.statusCode = 200
  res.end("<html><body><h1> this is an Express Server</h1></body></html>")
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
  console.log(`server is running at ${hostname}:${port}`)
})
