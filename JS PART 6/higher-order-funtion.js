// 1. take another function as a argument

// function maultipleGreet(func , count){ // higher order function 
//     for(let i =1 ; i<=count; i++){
//        func();
//     }
// }


// let greet = function () {
//     console.log("Hello WOrld");
// }

// // maultipleGreet(greet , 2);
// maultipleGreet(function() {console.log("Namaste");} , 2); // we can pass functin directly


//2. returns a funtion

function OddOrEvenFactory(request){  //higher order function wiht return value
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }

    else if(request == "even"){
        return function(n){
            console.log((n%2==0));
        }
    }
    else{
        console.log("Wrong Request : ");
    }
}

let request = "odd";

/// console - output

// request = "even";
// 'even'
// let func = OddOrEvenFactory(request)
// undefined
// func(10)
// higher-order-funtion.js:29 true
// undefined
// request = "odd";
// 'odd'
// let func = OddOrEvenFactory(request)
// undefined
// func(5)
// higher-order-funtion.js:23 true
// undefined