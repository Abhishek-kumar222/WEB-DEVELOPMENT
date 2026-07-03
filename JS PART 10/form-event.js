let form = document.querySelector('form')
form.addEventListener("submit" , function(event){

 event.preventDefault(); // isse jo form submit karne pr jo bhi action ho rha hoga wo ruk jayega
//     console.log("form submitted");

// let inp = document.querySelector("input");
// console.dir(inp);
// console.log(inp.value);

// let user = this.elements[0]; // == document.querySelector("#user"); == form.elements[0]
// let pass = this.elements[1]; // == document.querySelector("#pass"); == form.elements[1]
// console.log(user.value);
// console.log(pass.value);
// alert(`Hi, ${user.value} Your Password is set to ${pass.value}.`)

});
////---change event and input event
 let user = document.querySelector("#user");

 user.addEventListener("change" , function(){
   console.log("change event");   // bade change me triger hota h initial and final value me chanege hota h jab 
   console.log("final value is - ",this.value);

 });

 user.addEventListener("input" , function(){
   console.log("input event");  // chote chote changes me bhi triger hota h
   console.log("final value is - ",this.value);
 });