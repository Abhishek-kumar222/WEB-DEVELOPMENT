let names = ["Abhi" , "Naman" , "Nisha" , "Varsha" , "Himanshu"];
let [winner , runnerUp] = names ; // pehle do name dono me tore ho jayenge
let [winner1 , runnerUp1 , ...others] = names ; //do name ke baad jo bache h sab others me chale jayenge rest ke concepts se 
console.log(winner);

//---output
// runnerUp
// 'Naman'
// others
// (3) ['Nisha', 'Varsha', 'Himanshu']
// winner
// 'Abhi'

// with object 
const student = {
    name: 'Abhishek',
    age: 21,
    class: 12,
    subjects: ['Hindi' , 'English' , 'Maths' , 'Physics' , 'Chemistry'],
    username: 'abhishek@coolboy123',
    password: 'nhi pta'

};
// let username = student.username;
// let password = student.password;

// let { username,password} = student; //same name h to student me aker search karega mil jayega  
// but if we want to store a value in defferent variable name 

let { username: user , password: pass} = student;
// is case me

//on console

// username
// VM584:1 Uncaught ReferenceError: username is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM584:1
// user
// 'abhishek@coolboy123'

// password
// VM686:1 Uncaught ReferenceError: password is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM686:1
// pass
// 'nhi pta'

// if we want to add some additional data
let { username: user , password: pass , city: place = 'mumbai'} = student;// new value city known by place with default value Mumbai 
