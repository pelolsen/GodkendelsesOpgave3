const users = require("../HardcodedUsers")
// this function looks at all the users and return the users that have shared interrest.
function interestMatch(){
    for (let i = 0; i < users.length; i++) {
      //define a user from the usersArray
      const user1 = users[i];
      for (let j = i+1; j < users.length; j++) {
        // Defines a second user from the userArray
        const user2 = users[j];
        //if any two different users have the same intterest
        if (user1.interest === user2.interest) {
          //match them
          return `${user1.username} is a match with ${user2.username}. Shared interrest: ${user1.interest}`;
        }
      }
    }
  }
module.exports = interestMatch;
