function sum(){
    console.log(arguments); //here arguments is not a arra it is a collection we cannot apply any kind of methods of arr in it.
};
// \sum(1,3,5,7);  sum me jo bhi variable pass karenge sabko arguments me collect karta jayega
// rest.js:2 
// Arguments(4) [1, 3, 5, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// if we want to apply aal the methods of array in arguments we will use rest

function sum1(...args){
    return args.reduce((sum,el) => sum+el);
}
// on console
// sum1(1,2,4,6,4,3,6)
// 26