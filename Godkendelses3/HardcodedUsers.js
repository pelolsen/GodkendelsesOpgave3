const UserTypeArray = require('./Model/user')
const PaymentUser = UserTypeArray[1]
const FreeUser = UserTypeArray[2]
const InterrestArray =require('./Model/Interrest')


let userArray = []
let bob = new PaymentUser ("bob123", "penis", "Bob", "bobiski", "bobobob", "2000-10-10", "male", InterrestArray[0], "4233-029302-123", "06-20", "224");
let jack = new FreeUser ("jack20", "340302", "Jack", "jackiski", "jack@jack.com", "2000-06-10", "male", InterrestArray[1]);
let thif = new FreeUser ("thif20", "204903", "Thifanny", "Thifiski", "thif@jack.com", "2000-09-12", "famale", InterrestArray[0]);

userArray = [bob, jack, thif]

module.exports= userArray