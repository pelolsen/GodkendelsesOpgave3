class User {
    constructor(username, password, firstname, lastname, email, birthday, gender){
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
    }
    getAge() {
        var birthDate = new Date(this.birthday);
        var diff_ms = Date.now() - birthDate;
        var age_dt = new Date(diff_ms); 
        
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }


    confirm1() {
        let message = "Hello " + this.firstname + "! " + "You are now registered as " + this.username;
        return message;
    }
}

class PaymentUser extends User {
    constructor(username, password, firstname, lastname, email, birthday, gender, credicardNumber, creditcardExpires, ccv){
        super(username, password, firstname, lastname, email, birthday, gender);
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
    confirm2(){
        let message = this.username + ", your " + this.cardagency() + " card is registered and saved!";
        return message;
    }

    
}

class FreeUser extends User {
    constructor(username, password, firstname, lastname, email, birthday, gender){
        super(username, password, firstname, lastname, email, birthday, gender);
    }
    confirm3(){
        let message = this.username + ", enjoy your free session!";
    }
    
}

module.exports = User;
module.exports = PaymentUser;
module.exports = FreeUser;