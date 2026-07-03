let btn = document.querySelector("button");
btn.addEventListener("click", function(){
 let h3 = document.querySelector("h3");
 let randomColor = getRandomColor();
//  let randomColor1 = getRandomColor1();
 h3.innerText = randomColor;
 btn.style.color = randomColor;
//  btn.style.backgroundColor = randomColor1;
 let div = document.querySelector("div");
//  div.style.color= randomColor1;
 div.style.backgroundColor = randomColor;
})

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let Color = `rgb(${red},${green},${blue})`;
    return Color;
}
// function getRandomColor1(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let Color1 = `rgb(${green},${blue},${red})`;
//     return Color1;
// }