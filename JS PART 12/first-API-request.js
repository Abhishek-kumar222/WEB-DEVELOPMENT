// let url = 'https://catfact.ninja/fact';

// fetch(url)
// .then((res)=>{
//     return res.json(); //res.json() bhi ek promis return karta h 
// })
// .then((data)=>{
//     console.log("data 1 - ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data 2 - ",data2.fact);
// })
// .catch((err)=>{
//  console.log(err);
// })

// console.log("ye pehle print ho jayega kyunki js wait nhi karta asyncronis work karta h API's call backend me chalti rahegi");

////with async and await // try & catch 

let url = 'https://catfact.ninja/fact';

async function getFacts() {
    try{

      let res = await fetch(url);
      let data = await res.json();
      console.log(data.fact);

      let res1 = await fetch(url);
      let data2 = await res1.json();
      console.log(data2.fact);

    } catch(e){
        console.log("Error - ",e);
    }

    console.log("bye");
}
getFacts();