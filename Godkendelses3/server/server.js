const express = require('express')
const cors = require('cors')
const server = express()
const port = 3000

const Users = require("./HardcodedUsers")
server.get('/', function(req,res){
  res.json({
    Age: Users[0].getAge()
  })
})

server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})