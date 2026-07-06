h1 = document.querySelector("h1");

function changeColor(color , delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
        h1.style.color = color;
        resolve("1st color changed");
    },delay);
    });
}

changeColor("purple" , 1000)
.then(()=>{
    console.log("2nd color changed");
    return changeColor("green" ,1000);
})
.then(()=>{
    console.log("3rd color changed");
    return changeColor("red" ,1000);
})
.then(()=>{
    console.log("4th color changed");
    return changeColor("orange" ,1000);
})
.then(()=>{
    console.log("5th color changed");
    return changeColor("grey" ,1000);
})
.then(()=>{
    console.log("6th color changed");
    return changeColor("blue" ,1000);
})
.then(()=>{
    console.log("7th color changed");
    return changeColor("aqua" ,1000);
})
.then(()=>{
    console.log("8th color changed");
    return changeColor("pink" ,1000);
})
.then(()=>{
    console.log("9th color changed");
    return changeColor("yellow" ,1000);
})



