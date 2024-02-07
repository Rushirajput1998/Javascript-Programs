const num=[1,2,3,4,5,6,7];

// const mynum=num.reduce((acc,curvalue)=>{
// console.log(`acc ${acc},curvalue ${curvalue}`)
// return acc+curvalue}
// ,0)
// console.log(mynum);

const mynum=num.reduce((acc,cv) =>acc+cv,0)
console.log(mynum);