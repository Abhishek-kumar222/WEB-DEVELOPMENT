let num = [1,3,4,5];
let double = num.map(function(el){ // created new array
    return el*2;
});
console.log(double); // 2,6,8,10

let double1 = num.map(function(el){ // created new array
});
console.log(double1); //(4) [undefined, undefined, undefined, undefined] kyunki return kuch nhi kiya


//with object
let arr2 = [{
    name: 'Abhishek',
    marks: 97
},
{
 name: 'naman',
 marks: 69
},
{
 name: 'nisha',
 marks: 78
}];

//convert marks to gpa using map functon

let gpa = arr2.map((el)=>{return el.marks/10});
console.log(gpa); // 9.7 , 6.9 , 7.8


////// ----- filter function ----- //////
let number = [4,6,3,5,7,9,6];
let even = number.filter((el) => (el%2==0) );
let odd = number.filter((el) => (el%2!=0) );
console.log(even); // [4,6,6]
console.log(odd); // [3, 5, 7, 9]

/////-----Every method-----////  like logical AND

let numbers = [4,6,3,5,7,9,6];
console.log(numbers.every((el) => (el%2==0)) );// false
console.log(even.every((el) => (el%2==0)) );// true - even array uper se liya h

/////-----some method-----////  ek bhi true to sab true  //like logical OR 
let numbers1 = [4,6,3,5,7,9,6];
console.log(numbers1.some((el) => (el%2==0)) );// true
console.log(odd.some((el) => (el%2==0)) );// false - odd array uper se liya h

