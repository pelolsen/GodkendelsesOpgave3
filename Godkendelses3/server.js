const express = require('express')
const cors = require('cors')
const server = express()
const port = 3000
const Users = require("./HardcodedUsers")
const Images = require("./HardcodedImages")
const InterrestMach = require('./Controller/InterrestMach')
const imageCheck = require('./Controller/imageTypeController')
const InterrestArray = require('./Model/Interrest')


server.get('/', function(req,res){
  res.json({
    Tabs: "/users, /interest, /match, /image"
  })
})
server.get('/users', function(req,res){
  res.json({
    Users: Users
  })
})
server.get('/interest', function(req,res){
  res.json({
    Interest: InterrestArray
  })
})
server.get('/match', function(req,res){
  res.json({
    Match: InterrestMach()
  })
})

server.get('/image', function(req,res){
  res.json({
    Images: Images,
    ImgCheck: imageCheck()
  })
})



server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})