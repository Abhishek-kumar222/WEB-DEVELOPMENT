//QS-1.
const square = (n) => n*n;
console.log(square(12)); //144

let id = setInterval( ()=>{
console.log("Hello World"); // har 2 second me print karega 
 },2000);

setTimeout(()=>{
    clearInterval(id); // 10 scong baad setInterval ko rok dega total 5 times print ho jayega
   console.log("clear interval ran");
},10000);




