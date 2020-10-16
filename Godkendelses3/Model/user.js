//Here I create my User class wich is parent to the two other user classes
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
    // This function is used to determine the age of the User
    getAge() {
        var birthDate = new Date(this.birthday);
        var diff_ms = Date.now() - birthDate;
        var age_dt = new Date(diff_ms); 
        
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}
// PaymentUsers need to have creditcard information
class PaymentUser extends User {
    constructor(username, password, firstname, lastname, email, birthday, gender, interest, credicardNumber, creditcardExpires, ccv){
        super(username, password, firstname, lastname, email, birthday, gender, interest);
        this.credicardNumber = credicardNumber;
        this.creditcardExpires = creditcardExpires;
        this.ccv = ccv;
    }
    // This function is used to determine wether the card is a VISA, Mastercard or other
    cardagency(){
        let numbe = this.credicardNumber;
        let cardname = "";
        if (numbe[0] == "4"){
            cardname += "VISA";
            return cardname;
        } else if (numbe[0] == "5"){
            cardname += "MasterCard";
            return cardname;
        } else{
            cardname += "agency";
            return cardname;
        }
    }

    
}
//FreeUsers do not need creditcard so they are just normal users
class FreeUser extends User {
    constructor(username, password, firstname, lastname, email, birthday, gender, interest){
        super(username, password, firstname, lastname, email, birthday, gender, interest);
    }
}
// I put my users into an array so I can export all of them
UserTypeArray = [User, PaymentUser, FreeUser];

module.exports= UserTypeArray;
