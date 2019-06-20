const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const PORT = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(PORT, function() {
    console.log(`Backend is running on port ${PORT}.`)
})