const student ={
    name: "Abhi",
    marks: 95,
    city: "chicago",
    prop: this, // globle scope
    getName: function(){ 
        console.log(this);
        // calling object ko aopna this banata h isliye yaha this ki value caling object student h 
        return this.name;
          },
    getMarks: () => {
        console.log(this);
        // parent ke scope ko apna this banata h isliye yaha this ki value caling object nhi parent ka scope window objecyt hogi 
        return this.marks; 
    }
  
};      

// output

// student.getName()
// {name: 'Abhi', marks: 95, city: 'chicago', prop: Window, getName: ƒ, …}
// 'Abhi'

// student.getMarks()
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// undefined

const student1 ={
    name: "Abhi",
    marks: 95,
    city: "chicago",
    prop: this, 
    getInfo1: function(){
        setTimeout(()=>{
             console.log(this); //arrow function parent ke scope ko access karta h yaha uska parente function h or uska call student h or uska scope student ocject h 
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){ // setTimout ko window object call karta h or function ka scope uska calling object hota h 
            console.log(this);
        },2000);
    }
}
// output
// student1.getInfo1()
// undefined
// {name: 'Abhi', marks: 95, city: 'chicago', prop: Window, getInfo1: ƒ, …}

// student1.getInfo2()
// undefined
//  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
