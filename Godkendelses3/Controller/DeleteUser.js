const users = require("../HardcodedUsers")

// Delete User user
function delUser(req, res) {
    res.end("deleted" + JSON.stringify(users[1]))
}


module.exports = delUser