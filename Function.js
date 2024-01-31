function myName(){
    console.log("Rushi");
}

// myName();


function addition(num1,num2){
   let result=num1+num2; 
    return result;
   console.log("This console is not executef after return");
}

// let result=addition(2,4);
// console.log(result);

function fullName(firstname,lastName){
    return `My Name is ${firstname} ${lastName}`;
}

let Name=fullName("Rishi","Rajput")
console.log(Name);