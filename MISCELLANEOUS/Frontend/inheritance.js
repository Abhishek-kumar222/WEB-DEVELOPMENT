class Person { //parent class
    constructor(name , age){
        console.log("Person Class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi , my name is ${this.name}`);
    }
}




class Student extends Person{ //child 1
    constructor( name , age , marks){
        console.log("Student Class constructor");
        super(name , age) // parent class constructor is being called
        this.marks = marks;
    }

}




class Teacher extends Person { // child 1
    constructor( subject){
        super(name , age) // parent class constructor is being called
        this.subject = subject;
    }

}
