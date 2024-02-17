// const promiseOne=new Promise(function(resolved,reject){

//     setTimeout(function(){
//         console.log("PromiseOne Called");
//         resolved();
//     },1000)
// })
  
// promiseOne.then(function(){
//     console.log("Function is resolved");
// });


// const promiseTwo=new Promise(function(resolved,reject){
//     setTimeout(function(){
//         console.log("PromiseTwo Called");
//         resolved();
//     },1000)
// }).then(function(){
//     console.log("Function is resolved");
// });

//    new Promise(function(resolved,reject){
//     setTimeout(function(){
//         console.log("PromiseThree Called");
//         resolved({
//             username:"Rushirajput",
//             email:"shindev9805@gmail.com"
//         });
//     },1000)
// }).then(function(user){
//     console.log(user);
// });

// const promiseFour=new Promise(function (resolve,reject){
//     setTimeout( function (){
//         let error=true;
//         if(!error)
//         {
//             resolve({username:"rushi",password:"1234"})
//         }
//         else{
//             reject("Error:Something went wrong")
//         }
//     }
//         ,1000)
// })

// promiseFour.then(function (user){
//     console.log(user);
//     return user.username;
// }).then((username) =>{
//     console.log(username);
// }).catch(()=>{
//     console.log("Something Went wrong");
// }).finally(() =>{
//     console.log("The Promise is either resolved or reject ");
// })


const promisefive=new Promise((resolve,reject) =>{
    setTimeout( function (){
        let error=true;
        if(!error)
        {
            resolve({username:"rushi",password:"1234"})
        }
        else{
            reject("Error:Something went wrong")
        }
    }
        ,1000)
})

async function promisefiveasync(){
    try{
        const resp=await promisefive;
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}

promisefiveasync();



