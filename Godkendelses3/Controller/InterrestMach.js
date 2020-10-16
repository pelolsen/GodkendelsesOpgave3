const users = require("../HardcodedUsers")
// this function looks at all the users and return the users that have shared interrest.
function interestMatch(){
    for (let i = 0; i < users.length; i++) {
      const user1 = users[i];
      for (let j = i+1; j < users.length; j++) {
        const user2 = users[j];
        if (user1.interest === user2.interest) {
          return `${user1.username} is a match with ${user2.username}. Shared interrest: ${user1.interest}`;
        }
      }
    }
  }
module.exports = interestMatch;
