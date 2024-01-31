if(true){
    let a=10;
    const b=20;
    var c=30;
}

//  console.log(a);//localscope or blockScope
//  console.log(b);//localscope or blockScope
//  console.log(c);//global Level Scope


function one(){
    let username="Rushi";

    function two(){
        let password="rishirajput1998"
        console.log(username);
    }
    // console.log(password);//cannot access child properties
     two();
}

one();
