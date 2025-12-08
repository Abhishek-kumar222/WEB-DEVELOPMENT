///QS-1


// let num=30;
// if (num%10==0){
//     console.log("number is good ");
// }
// else{
//     console.log("Number is not good ")
// }

///QS-2

    // let name=prompt("Enter your name : ");
    // let age=prompt("Enter your age : ");
    //   console.log(`${name} is ${age} years old `);

///QS-3

// let Quarter="1";
// switch(Quarter){
//     case "1":
//     console.log("Months of Quarter 1 = January,February,March. ");
//     break;
//     case "2":
//     consolez.log("Months of Quarter 2 = April,Mai,Jun.");
//     break;
//     case "3":
//     console.log("Months of Quarter 3 = July,Augest,September. ");
//     break;
//     case "4":
//     console.log("Months of Quarter 4 = October,November,December. ");
//     break;
// }

///QS-4

// let str="Abhishek";

//   if((str[0]==='A' || 'a') && (str.length>5)){
//     console.log("It's a golden String.");
//   }
//   else{
//     console.log("It's not a golden String.");
//   }

///QS-5

// let num1=prompt("Enter number 1 : ");
// let num2=prompt("Enter number 2 : ");
// let num3=prompt("Enter number 3 : ");

// if(num1>num2){
//     if(num1>num3){
//         console.log(`The largest number is = ${num1}`)
//     }
//     else{
//         console.log(`The largest number is = ${num3}`)
//     }
// }
// else{
//     if(num2>num3){
//         console.log(`The largest number is = ${num2}`)
//     }
//     else{
//         console.log(`The largest number is = ${num3}`)

//     }
// }

///QS-6(Bonus)

let num1=prompt("Enter num1:");
let num2=prompt("Enter num2:");

if (num1[num1.length-1]==num2[num2.length-1]){
    console.log(`${num1} and ${num2} has same last dizit i.e = ${num1[num1.length-1]}`);
}
else{
    console.log("There is no any same last disit.")
}
