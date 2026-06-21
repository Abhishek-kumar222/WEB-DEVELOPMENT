// //1. Arrow Function
//  const sum = (a,b) => {
//     console.log(a+b)
// };

// const cube = (a) =>{ 
//     return a*a*a;
// };

// // const power = (a,b) =>{
// //     return a**b
// // };

// //1. Arrow Function (implicit return) 
// const mul = (a,b) => (
//     a*b // ager functin se sirf koi value return bas karani h koi or kaam nhi karana h or sirf ek hi value return karani h to hum return keyword remove kar sakte h 
// ); // curly braces ki jagas petranthisec lagana padta h

// const power = (a,b) => (a**b);  // single line function


///--set timeoutFunction ///

// console.log("hi Mr.! ");

// setTimeout(() => {
//     console.log("Abhishek's House ");
// }, 4000);

// console.log("Welcome to ");
// console.log("Welcome to ");
// console.log("Welcome to ");
// console.log("Welcome to ");

// setInterval


// setInterval(() => {
//     console.log("Namaste Dunia "); har do second me print karega fir gayab ho jayega 2 second baad fir print karega fir gayab ho jayega
// }, 2000);




///inetrval stop karane ke liye ///


// let id = setInterval(() => {
//     console.log("Namaste Dunia "); 
// }, 2000);

// console.log(id);


// let id1 = setInterval(() => {
//     console.log("Jay Shri Ram "); 
// }, 3000);

// console.log(id1);

// Namaste Dunia 
// miscellaneous.js:51 Jay Shri Ram 
// 2miscellaneous.js:44 Namaste Dunia 
// miscellaneous.js:51 Jay Shri Ram 
// miscellaneous.js:44 Namaste Dunia 
// miscellaneous.js:51 Jay Shri Ram 
// 2miscellaneous.js:44 Namaste Dunia 
// miscellaneous.js:51 Jay Shri Ram 
// clearInterval(id) // jis function ki id pass karenge wo execute hona band ho jayega
// undefined
// 6miscellaneous.js:51 Jay Shri Ram 
// clearInterval(id1)
// undefined
