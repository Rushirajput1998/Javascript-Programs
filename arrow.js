// function ex(){
//     console.log(this);
// }

// ex();
// const user={
//     username:"Rushikesh",
//     password:"12246",
//     welcomemsg:function(){
//         console.log(`${this.username},welcome to the world`)
//     }
// }

// console.log(user.welcomemsg())
// console.log(this);

// const ex=function (){
//     let username="rushi"
//     console.log(this.username);
// }

// ex();

// const add=(num1,num2) => {
//     console.log(num1+num2);
// }

// add(2,4);

const addone=(num1,num2) =>({
    username:"raj"
})

// console.log(addtwo(10,5));

const add=(num1,num2) =>{
    console.log(num1+num2);
}

// add(10,4);

const addtwo=(num1,num2) =>({
    username:"raj"
    
})

console.log(addtwo(10,5));