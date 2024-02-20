class User{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    static dispay(){
        console.log("You call Static method in class");
    }
}

const fullname=new User("Sagar","Shinde");
console.log(fullname);
User.dispay();
// fullname.dispay();