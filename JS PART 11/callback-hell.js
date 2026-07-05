h1 = document.querySelector("h1");

// setTimeout(() => {
// h1.style.color = ("red");
// }, 1000);
// setTimeout(() => {
// h1.style.color = ("green");
// }, 2000);
// setTimeout(() => {
// h1.style.color = ("orange");
// }, 3000);
// setTimeout(() => {
// h1.style.color = ("blue");
// }, 4000);

//baar baar same kaam kara rahe h function likhte h

function changeColor(color , delay , nextchangeColor){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextchangeColor) nextchangeColor();
    },delay);
}

changeColor("purple" , 1000 , ()=>{
    changeColor("aqua" , 1000 , ()=>{
        changeColor("blue" , 1000 , ()=>{
            changeColor("red" , 1000);
        });
    });
});

// callBack nexting => callBack hell 