let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// }

// arr.forEach(print);
arr.forEach(function(el){console.log(el)}); // another way to write same thing


//with arrow function

let print = (el) => {
    console.log(el);
}

arr.forEach(print);

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

arr2.forEach((student)=>{
    console.log(student)// pura obejact print hoga
    console.log(student.name)// pura obejact ka name print hoga
})