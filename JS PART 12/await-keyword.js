// function ranNum(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//         let num = Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//      }, 1000);
//    });
// }

// async function callFunc() {
//     await ranNum();  // await keyword baki funcion callings ko wait karayega tab tak jab tak current function kuch reurn na karde 
//     await ranNum();
//     ranNum();
// }
// callFunc();


///color change program with await keyword and uses try and catch for cauth the problem
h1 = document.querySelector("h1");

function changeColor(color){
    return new Promise((resolve , reject)=>{
     setTimeout(()=>{
         let num = Math.floor(Math.random()*6)+1;
         if (num > 3){
            reject("promise rejected");
         }
         h1.style.color = color;
         resolve("1st color changed");
         console.log(resolve);
        },1000);
    });
}


async function color() {
 try{
   await changeColor("red");
   await changeColor("yellow");
   await changeColor("pink");
   await changeColor("blue");
   await changeColor("aqua");
   await changeColor("orange");
 }
 catch(err){
    console.log(err);
    console.log("promise rejected");
 }
   let a = 10;
   console.log(a);
   console.log("new number = ", a+3);
}

color();




// by promises
// changeColor("purple" , 1000)
// .then(()=>{
//     console.log("2nd color changed");
//     return changeColor("green" ,1000);
// })
// .then(()=>{
//     console.log("3rd color changed");
//     return changeColor("red" ,1000);
// })
// .then(()=>{
//     console.log("4th color changed");
//     return changeColor("orange" ,1000);
// })
// .then(()=>{
//     console.log("5th color changed");
//     return changeColor("grey" ,1000);
// })
// .then(()=>{
//     console.log("6th color changed");
//     return changeColor("blue" ,1000);
// })
// .then(()=>{
//     console.log("7th color changed");
//     return changeColor("aqua" ,1000);
// })
// .then(()=>{
//     console.log("8th color changed");
//     return changeColor("pink" ,1000);
// })
// .then(()=>{
//     console.log("9th color changed");
//     return changeColor("yellow" ,1000);
// })



