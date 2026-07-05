// function saveToDB(data , success ,fail){
//     let netSpeed = Math.floor(Math.random()*10)+1;
//     console.log(`netSpeed = ${netSpeed}mbps`);
//     if(netSpeed>4){
//         success();
//     }else{
//         fail();
//     }
// }

// saveToDB(
//     "Abhishek" , 
//     ()=>{
//      console.log("success : your data saved ");
//      saveToDB(
//         "Naman",
//         ()=>{
//             console.log("success2 : data2 saved");
//             saveToDB(
//                 "varsha",
//                 ()=>{
//                    console.log("success3 : data3 saved");
//                 },
//                 ()=>{
//                    console.log("fail3 : weak connection");
//                 }
//             )
//         },
//         ()=>{
//             console.log("fail2 : weak connection");
//         }
//       );
//     },
//    ()=>{
//      console.log("fail : weak Connection");
//    }
// );

// minimised by promise object//

function saveToDB(data){
    let netSpeed = Math.floor(Math.random()*10)+1;
    return new Promise((resolve , reject) =>{
        if(netSpeed>4){
            resolve("success : data was saved ");
        }else{
            reject("failure : weak connection ");
        }
    });
}

// saveToDB("Apna college");

/// then() and catch() method // 

saveToDB("Apna college")
.then((result)=>{                         // it will run when promise will be resolved
    console.log("data 1 saved");
    console.log("Result of promise: ",result);
    return saveToDB("Abhishek");
})
.then((result)=>{
    console.log("data 2 saved");
    console.log("Result of promise: ",result);
    return saveToDB("naman");
})
.then((result)=>{
    console.log("data 3 saved");
    console.log("Result of promise: ",result);
})
.catch((error)=>{                               // otherwise it will run
    console.log("promise was rejected");
    console.log("Error of promise: ",error);

});
