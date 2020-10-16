const express = require('express')
const cors = require('cors') //if bugging on chrome
const server = express()
const port = 3000 //define localhost port
// require all the functions and classes I'll need
const Users = require("./HardcodedUsers")
const Images = require("./HardcodedImages")
const InterrestMach = require('./Controller/InterrestMach')
const imageCheck = require('./Controller/imageTypeController')
const InterrestArray = require('./Model/Interrest')
const createUser = require('./Controller/CreateUser')
const delUser = require('./Controller/DeleteUser')

// "/" stands for the initial tab of the server, so when you navigate in the server you can write: localhost:3000/users
server.get('/', function(req,res){
  res.json({
    Tabs: "/users, /create, /delete /interest, /match, /image"
  })
})

//show all data of the Users
server.get('/users', function(req,res){
  res.json({
    Users: Users
  })
})

// show the created user
server.put('/create', createUser)

//show the deleted user
server.delete('/delete', delUser)

// show all the possible interests
server.get('/interest', function(req,res){
  res.json({
    Interest: InterrestArray
  })
})

// shows who matches by shared interests
server.get('/match', function(req,res){
  res.json({
    Match: InterrestMach()
  })
})

// shows image data + if any image is not acceptable
server.get('/image', function(req,res){
  res.json({
    Images: Images,
    ImgCheck: imageCheck()
  })
})


// Serveren lytter på den angivet port
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})