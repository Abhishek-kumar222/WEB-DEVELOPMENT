let arr = [1,2,4,6,8,5,3,6,8];

let min = Math.min(...arr); //1
console.log(min);
console.log(...arr); // 1 2 4 6 8 5 3 6 8

// with string

console.log(..."Abhishek"); // A b h i s h e k

// with array Literals
let arr1 = [1,2,4,6,8,5,3,6,8];
let newArr = [...arr1];  // created copy of arr1

let odd = [1,3,5,7];
let even = [2,4,6,8];

let final = [...odd , ...even]


//with objects literals

let data = {
    email: "Abhishek@gmail.com",
    password: "Abhi6575"
};

let dataCopy = {...data };
let dataCopy1 = {...data , id: 123 };

//output

// dataCopy
// {email: 'Abhishek@gmail.com', password: 'Abhi6575'}
// dataCopy1
// {email: 'Abhishek@gmail.com', password: 'Abhi6575', id: 123}

// object me arr 
let arr4 = [1,2,4,6,8,5,3,6,8];
let obj1 = {...arr4};

// obj1
// {0: 1, 1: 2, 2: 4, 3: 6, 4: 8, 5: 5, 6: 3, 7: 6, 8: 8} // key=index number, value me array element
// 0:1
// 1:2
// 2:4
// 3:6
// 4:8
// 5:5
// 6:3
// 7:6
// 8:8



