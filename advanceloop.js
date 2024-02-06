
//for of loop

const value=[10,20,30,40];

// for (const number of value) {
//     console.log(number);
    
// }


//Map

const map=new Map();

map.set("IN","India");
map.set("EN","English");
map.set("MAR","marathi");

// for (const [key,value] of map) {
//     console.log(key +":"+ value);
// }

const address={
    name:"rishi",
    village:"Ravla",
    tal:"soygaon",
    dist:"sambhajinagar"
}

for (const key in address) {
    // if (Object.hasOwnProperty.call(address, key)) {
    //     const element = address[key];
    //     console.log(element);

    console.log(address[key]);
        
    }
