class User {
    constructor(firstname, lastname, email, birthday, gender){
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.birthday = birthday
        this.gender = gender
    }
    getAge() {
        var birthDate = new Date(this.Birthday);
        var diff_ms = Date.now() - birthDate;
        var age_dt = new Date(diff_ms); 
        
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}

class PaymentUser extends User {
    constructor(creditcard, firstname, lastname, email, birthday, gender){
        super(firstname, lastname, email, birthday, gender)
        this.creditcard = creditcard
    }
    
}

class FreeUser extends User {
    constructor(firstname, lastname, email, birthday, gender){
        super(firstname, lastname, email, birthday, gender)
    }
    
}



// Når jeg laver en ny class skal jeg så bruge en af de to underclasser
// Interest må så være en funktion hvor den en liker den anden
//Match er også en funktion hvor når de matcher, burde de at kunne skriv beskeder til hinanden eller lign.
// Image aner jeg ikke hvad skal det bruges til