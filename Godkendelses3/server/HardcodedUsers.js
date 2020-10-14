const User = require('./Model/user')
const PaymentUser = require('./Model/user')
const FreeUser = require('./Model/user')

let userArray = []
let bob = new PaymentUser ("bob123", "penis", "Bob", "bobiski", "bobobob", "2000-10-10", "male", "4233-029302-123", "06-20", "224");

userArray = [bob]

module.exports= userArray