// let sum = 23; // global variabl kahi bhi use karo



// //function scope
// function calsum(n1 ,n2){
//   let sum = n1+n2;  // here sum is function variabl we cant access outside of function
// }

// console.log(sum);



//block scope

// {
//     let a =25;
// }
// console.log(a); // error


/// lexical scope

function outer(){
    let a =25;
    let b =30;
    function inner(){  // inner function ka scope bhi outer function ke ander hi h bahar directly call nhi kar sakte. 
        console.log(a); //lexival scope
    }
    inner();
}
outer();