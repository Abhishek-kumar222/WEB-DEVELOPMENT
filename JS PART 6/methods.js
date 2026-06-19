// function which is define inside the variable is called methods.
// const calculator = {
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };

// output 

// calculator.add(5,6);
// 11
// calculator.sub(5,3);
// 2
// calculator.mul(5,3);
// 15

//shorthand of defininig og method without using function kew word

const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};