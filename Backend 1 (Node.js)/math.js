
module.exports.const sum = (a,b) => a+b; // we can also exports indivsually
const mul = (a,b) => a*b;
const g =9.5;
const PI = 3.14;


// module.exports = 123;
// module.exports = "hello";
let obj = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI
};
module.exports = obj;
