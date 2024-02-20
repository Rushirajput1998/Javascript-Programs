//ES6

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }

//     encryptPassword(){
//         return `The encrypt password is ${this.password}abd`
//     }
// }

// const user=new User("Rishi","rushi@gmail.com","4568");

// console.log(user);
// console.log(user.encryptPassword());


//Behind the scene 

function user1(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

Object.prototype.encryptPassword=function (){
    return `The encrypt password is ${this.password}abd`
}

const user2=new user1("Raj","raj@gmail.com","456");

console.log(user2);
console.log(user2.encryptPassword());