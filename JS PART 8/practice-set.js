// //1.
// let nums = [20,40,30,20,50,10];
// console.log(nums.every((ele) => ele%10==0));//true

// //2. minimum nummber in arr
// function getMinimum(num){
// let ans = num.reduce((min,el) => {
//     if(min<el){
//         return min;
//     }else{
//         return el;
//     }
// })
//     return ans;
// };

// let num = [6,4,5,2,4,6,7];
// console.log(getMinimum(num));//10

//////practice set//////

//1.
let arr = [1,2,3,4,5];
let square = arr.map((ele) => ele*ele);
console.log(square); 
let sum = arr.reduce((sum,ele) => sum+ele);
console.log(sum); 
let avg = sum/arr.length;
console.log(avg); 

//2.
let arr1 = [1,2,3,4,5];

let pluse5 = arr1.map((ele)=> ele+5);
console.log(pluse5);

//3.
let names = ["abhi" , "naman" , "nisha" , "varsha"];
let uppercase = names.map((ele)=> ele.toUpperCase());
console.log(uppercase);

//4.
function doubleAndReturnArge(arr ,...others){
 let newArr = [...arr , others.map((ele)=>ele+ele)];
 return newArr;
}

let arr2 = [1,2,3,4,5];
console.log(doubleAndReturnArge(arr , 6));

//5.
let first = {
    name: 'Abhishek',
    age: 21
};
let second = {
    branch: 'CSE',
    year: 2026
};
const mergeObject = (first ,second)=>({...first , ...second});

console.log(mergeObject(first,second));