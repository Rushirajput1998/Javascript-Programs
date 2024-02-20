class User{
    constructor(username){
        this.username=username;
    }

    logme(){
        console.log(`The name of user is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`The course is add by ${this.username}`);
    }
}

const u1=new Teacher("akshay",'akshy@gmail.com',"897");

console.log(u1);
u1.addCourse();
u1.logme();

const user=new User("vishal");

console.log(user);
user.logme();
// user.addCourse();