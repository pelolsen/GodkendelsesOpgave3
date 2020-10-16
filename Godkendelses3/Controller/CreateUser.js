const users = require("../HardcodedUsers")

// create User
function createUser(req, res) {
    res.end("created" + JSON.stringify(users[0]))
}


module.exports = createUser