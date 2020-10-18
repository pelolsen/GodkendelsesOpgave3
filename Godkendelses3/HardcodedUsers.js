const UserTypeArray = require('./Model/user')
const PaymentUser = UserTypeArray[1]
const FreeUser = UserTypeArray[2]
const InterrestArray =require('./Model/Interest')


let userArray = []
let bob = new PaymentUser ("bob123", "23342km", "Bob", "bobiski", "bobobob@bobtheman.dk", "2000-10-10", "male", InterrestArray[0], "4233-029302-123", "06-20", "224");
let jack = new FreeUser ("jack20", "340302se", "Jack", "jackiski", "jack@jack.com", "2000-06-10", "male", InterrestArray[1]);
let thif = new FreeUser ("thif20", "204903er", "Thifanny", "Thifiski", "thif@jack.com", "2000-09-12", "famale", InterrestArray[0]);

userArray = [bob, jack, thif]

module.exports= userArray