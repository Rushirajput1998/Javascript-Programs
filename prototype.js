const data={
    username:"Rushi",
    isLoggedIn:true,
    signIn:function(){
        console.log(`The username is ${this.username}`);
    }
}

console.log(data.signIn());

Object.prototype.rishi=function (){
    console.log("Rishi Present in all Objects");
}

console.log(data.rishi());

const hero=["Akshay","Ritvik","Ajay","Tiger","Sidharth"]

console.log(hero.rishi());

Array.prototype.arr=function (){
    console.log("This Object only access array Object");
}

console.log(hero.arr());
// console.log(data.arr());

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"Js",
    fullTime:true
}

TeachingSupport.__proto__=Teacher;