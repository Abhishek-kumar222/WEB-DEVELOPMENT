// function PersonMaker(name ,age){
//     const person = {
//       name : name,
//       age : age,
//       talk() {
//          console.log(`Hi , my name is ${this.name}`);
//       },
//     };

//     return person;
// }

// let p1 = PersonMaker("Abhishek" , 21);
// let p2  = PersonMaker("Abhishek" , 21);



///Output

// let p1 = PersonMaker("Abhishek" , 21);
// p1
// {name: "Abhishek", age: 21, talk: ƒ}   age: 21name: "Abhishek"talk: ƒ talk()[[Prototype]]: Object
// p1.talk();
//  Hi , my name is Abhishek

// let p2 = PersonMaker("Naman" , 22);

// p2
// {name: "Naman", age: 22, talk: ƒ}
// p2.talk();
//  Hi , my name is Naman


///Constructor - doen't return anything & start with capital latter 

// function Person(name ,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`hi, my name is ${this.name}`);
// };

// let p1 = new Person("Abhishek" , 21);


////  using class and object 
class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`hi, my name is ${this.name}`);
    }
}

let p1 = new Person("Abhishek" , 21); //constructor creation and calling
let p2 = new Person("Abhi" , 24); 