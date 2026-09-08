// let n =5;
// for(let i=0; i<n; i++) {
//     console.log("hello, " , i);
// }
// console.log("Namaste Dunia!")


// let argv = process.argv;

// for(let i=2; i<argv.length; i++){
//     console.log("hello , " ,argv[i]);
// }

// const math = require("./math");
// console.log(math);
// console.log(math.PI);
// console.log(math.sum(2,2));

// const info = require("./fruits");
// console.log(info);

// const figlet = require('figlet'); // package ko require karne ke liye ./ ki jarurat nhi8 padti 

// figlet("Abhishek", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

////export import

// import {sum ,PI } from "./math.js";

// console.log(sum(1,3));
// console.log(PI);

///random words package

import { generate  } from "random-words";
console.log(generate());