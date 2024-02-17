const randomColor=function (){
    const hex='0123456789ABCDEF';
    let color='#';

    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const startColorChanging=document.getElementById('b1');
const stopColorChanging=document.getElementById('b2');


function startInterval() {
    intervalId = setInterval(function(){
        document.body.style.backgroundColor=randomColor()
    }, 1000);
}

function stopInterval() {
    clearInterval(intervalId);
}


startColorChanging.addEventListener("click", startInterval);
stopColorChanging.addEventListener('click', stopInterval);
