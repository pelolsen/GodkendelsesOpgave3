const Image = require("./Model/image")
const Users = require("./HardcodedUsers")

let imageArray = []
let bobimage = new Image(".jpg", "35", Users[0].username)
let jackimage = new Image(".png", "34", Users[1].username)
let thifimage = new Image(".pdf", "101", Users[2].username)

imageArray = [bobimage, jackimage, thifimage]

module.exports= imageArray;
