// async function greet(){
//     return "good morning gokuldham"; //it returns promiss
// };


//output
// greet();
// Promise {<fulfilled>: 'good morning gokuldham'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "good morning gokuldham"

async function greet(){
   throw("404 page not found"); // for throwing error
    return "good morning gokuldham"; //it returns promiss
};
greet()
.then(()=>{
    console.log("sccess");
})
.catch((err)=>{
    console.log("error :" , err)
});

// arrow function 
let demo = async ()=>{
  return 5;
}