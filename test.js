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
}
let interrest = ["Netflix", "Sports", "Party", "Business", "Children", "Hygge"]

let bob = new User ("bob123", "12345", "Bob", "bobiski", "bob@bob.com", "2000-10-10", "male", interrest[0]);
let jack = new User ("jack20", "340302", "Jack", "jackiski", "jack@jack.com", "2000-06-10", "male", interrest[1]);
let thif = new User ("thif20", "204903", "Thifanny", "Thifiski", "thif@jack.com", "2000-09-12", "famale", interrest[0]);

users = [bob, jack, thif]

function interestMatch(){
    for (let i = 0; i < users.length; i++) {
      const user1 = users[i];
      for (let j = i+1; j < users.length; j++) {
        const user2 = users[j];
        if (user1.interest === user2.interest) {
          return `${user1.username} matches with ${user2.username}`;
        }
      }
    }
  }

console.log(interestMatch())