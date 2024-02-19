function person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    
}

const fullName=function (firstName,lastName){
    person.call(this,firstName,lastName)
}


const name=new fullName("Rushikesh","Shinde");
console.log(name);