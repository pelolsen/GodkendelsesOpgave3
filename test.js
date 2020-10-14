class User {
    constructor(username, password, firstname, lastname, email, birthday, gender, interest){
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.interest = interest
    }
    /*
    interestMatch(Array){
        var Matcharray = []
        Array.forEach(user => {
            if(user.interest == this.interest){
                if(user.username == this.username)
                {
                    //do nothing
                } else {
                    //brug en klasse her måske
                let match = user.firstname +" is a match with " + this.firstname
                Matcharray.push(match)
                } 
            }
        })
        return Matcharray;
}
*/
}

let InterrestArray = ["Netflix", "Sports", "Party", "Business", "Children", "Hygge"]

let bob = new User ("bob123", "12345", "Bob", "bobiski", "bob@bob.com", "2000-10-10", "male", InterrestArray[0]);
let jack = new User ("jack20", "340302", "Jack", "jackiski", "jack@jack.com", "2000-06-10", "male", InterrestArray[0]);
let thif = new User ("thif20", "204903", "Thifanny", "Thifiski", "thif@jack.com", "2000-09-12", "famale", InterrestArray[1]);

let array = [bob,jack,thif]

//console.log(bob.interestMatch(array))
// I want it to console.log - "bob maches with jack!" - because the have the same interrest


function interestMatching(array, actuser){
    var Matcharray = []
        array.forEach(user => {
            if(user.interest == actuser.interest){
                if(user.username == actuser.username)
                {
                    //do nothing
                } else {
                    //bruger her et objekt i stedet for en string
                let match = {
                    user1: user.firstname,
                    user2: actuser.firstname,
                    sharedinterest: actuser.interest
                }
                Matcharray.push(match)
                } 
            }
        })
        return Matcharray;
}

console.log(interestMatching(array, bob))


server.get('/', function(req,res){
    res.json({
      Users: Users,
      Interest: InterrestArray,
      Match: InterrestMach(),
      Images: Images,
      ImgCheck: imageCheck()
    })
  })