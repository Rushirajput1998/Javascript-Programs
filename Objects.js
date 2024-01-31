const myBiodata={
    firstName:"Rushikesh",
    lastName:"Shinde",
    Taluka:"Soygaon",
    Dist:"Sambhajinagar",
    Pincode:"431120"
}

// console.log( myBiodata.firstName);
// console.log( myBiodata["firstName"]);

myBiodata.lastName="Rajput";

// console.log(myBiodata["lastName"]);

// Object.freeze(myBiodata)
// myBiodata.Taluka="Jamner";

// console.log(myBiodata["Taluka"]);

 myBiodata.myarr=function(){
    console.log("hello how are you");
}

// console.log(myBiodata.myarr());

myBiodata.greeting = function(){
    console.log(`My Pincode is ${this.Pincode}`);
}

// console.log(myBiodata.greeting());


const obj1={a:"1",b:"2"};
const obj2={c:"3",d:"4"};

const obj3=Object.assign({},obj1,obj2);

console.log(obj3);
