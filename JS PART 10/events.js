// let p = document.querySelector("p");
// p.addEventListener("click" , function(){
//     let rancol = getRandomColor();
//     p.style.color = rancol;
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let Color = `rgb(${red},${green},${blue})`;
//     return Color;
// }

// let div = document.querySelector(".box");
// div.addEventListener("mouseenter" , function(){
//     console.log("mouse inside the div ");
// })


/// -- this in eventLitener--///

let btn = document.querySelector("button");
let  p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// btn.addEventListener("click" , function(){
//     console.log(this); // <button> tag print karega ktunki usi ke liye ye event set kiya hai 
//     console.dir(this);
//     this.style.backgroundColor = "aqua";
// })

// h1.addEventListener("click" , function(){
//     console.log(this); // <h1> tag print karega ktunki usi ke liye ye event set kiya hai 
//     console.dir(this);
//     this.style.backgroundColor = "aqua";
// })

// h3.addEventListener("click" , function(){
//     console.log(this); // <h3> tag print karega ktunki usi ke liye ye event set kiya hai 
//     console.dir(this);
//     this.style.backgroundColor = "aqua";
// })

// p.addEventListener("click" , function(){
//     console.log(this); // <p> tag print karega ktunki usi ke liye ye event set kiya hai 
//     console.dir(this);
//     this.style.backgroundColor = "aqua";
// })

////same code in short using function

function changeColor(){
    console.log(this);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click" , changeColor);
p.addEventListener("click" , changeColor);
h3.addEventListener("click" , changeColor);
h1.addEventListener("click" ,changeColor);



