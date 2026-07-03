// QS.1
// let box = document.querySelector("#box");

// box.addEventListener("mouseover", function() {
//     console.log("Mouse entered");
// });

// box.addEventListener("mouseout", function() {
//     console.log("Mouse left");
// });


// window.addEventListener("scroll", function () {
//     console.log("Page scrolling");
// });
// window.addEventListener("scroll", function () {
//     console.log(window.scrollY);
// });

// let img = document.querySelector("#img");

// img.addEventListener("load", function () {
//     console.log("Image loaded");
// });

////-- QS.2 -- ///

// let btn = document.createElement("button");
// btn.innerText = "Click me";
// let body = document.querySelector("body");
// body.appendChild(btn);  
// btn.addEventListener("click" , function(){
//     btn.style.color = "white";
//     btn.style.backgroundColor = "blue";
// });

///---QS.3 ---///

let inp = document.querySelector("input");
let h2 = document.querySelector("h2");
inp.addEventListener("input" , function(){
    this.value = this.value.replace(/[^a-zA-z ]/g,"");
    h2.innerText = this.value;
})