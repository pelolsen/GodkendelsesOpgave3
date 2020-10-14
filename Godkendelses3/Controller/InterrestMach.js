const users = require("../HardcodedUsers")

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
module.exports = interestMatch;
