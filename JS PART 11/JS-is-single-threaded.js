// let a = 10;
// console.log(a);
// let b = 20;
// console.log(b);
// console.log(a+b);
 
//JS ek time pr ek hi kaam karati h isiliye ise single treading kahte h 

// line bt line execute ho rha h isiliye ise syncronise programming kahte h 

setTimeout(() => {
    console.log("hello")
}, 2000);

console.log("hiii");

// yaha per hello pehle print hoga kyunk js wait nhi karta wo sertimout function brower ko de deta fir delay khatam hone ke baad browser functin ko js ke call stack ke top me add kar deta h or js use excute kar deta h or ise Asyncronise programming kahte h kyunki beech me function rah jaate h fir baad me aachank se execute hote h  