// let fruits = ["mango" , "banana" , "orange" , "apple"];

// for(let i =0;i<fruits.length;i++){
//     console.log(i , fruits[i]);
// }



// /nested loop with nasted array

// let bikes = [["platina" , "discover" , "100CC" ] , ["pulsor" , "royal enfeid" , "hf delux"]];

// for(let i = 0;i<bikes.length;i++){
//     console.log(`arr num ${i+1} : ---`);
//     for(let j=0;j<bikes[0].length;j++){
//         console.log(bikes[i][j]);
//     }
// }



////---for of loop---///  using for getting collection of data

// let bikes = ["platina" , "discover" , "100CC" ,"pulsor" , "royal enfeid" , "hf delux"];

//   for (bike of bikes){
//     console.log(bike);
//   }

// let name = "Abhishek";
// for(alphabet of name){
//     console.log(alphabet);
// } 


///----nested for of loop with nasted array

let bikes = [["platina" , "discover" , "100CC" ] , ["pulsor" , "royal enfeid" , "hf delux"]];

 for (bike of bikes){
     console.log(bike);
 }
 //or
  for (bike of bikes){
     for (names of bike){
     console.log(names);
     }
 }
