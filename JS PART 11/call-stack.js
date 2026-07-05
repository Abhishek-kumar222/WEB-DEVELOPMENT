// function hello(){
//     console.log(" inside hello fnx")
// }

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done!")

// stack me function calling store hoti h kon pehle call hua kon baad me approach LIFO


/// Visualizing the call stack

function one(){
    return 1;

}
function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

