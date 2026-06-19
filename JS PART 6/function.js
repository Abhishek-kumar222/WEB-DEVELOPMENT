// function name(){
//     console.log("Abhishek");
// }

// function number(){
//     for(let i=1;i<=10;i++){
//         console.log(i);
//     }
// }

// name();
// number();


//  prqctice qs - random betweem 1 to 6 using function 

// function dice(){
//     let num = Math.floor(Math.random()*6)+1;
//     console.log(num);
// }

// dice();


///-------Function expression -----//// function likhne ka hi second way h
//nameless function h 
const sum = function(a,b) {
    return a+b;
}
console.log(sum(2,4));

//another one
let hello = function() {
console.log("Hello");
}
//becouse it is looking like vairiabl so we can change the value of it 
hello = function() {
console.log("Namaste");
}
hello();