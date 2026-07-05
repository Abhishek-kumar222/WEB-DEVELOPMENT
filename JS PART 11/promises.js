function saveToDB(data , success ,fail){
    let netSpeed = Math.floor(Math.random()*10)+1;
    console.log(`netSpeed = ${netSpeed}mbps`);
    if(netSpeed>4){
        success();
    }else{
        fail();
    }
}

saveToDB(
    "Abhishek" , 
    ()=>{
     console.log("success : your data saved ");
     saveToDB(
        "Naman",
        ()=>{
            console.log("success2 : data2 saved");
            saveToDB(
                "varsha",
                ()=>{
                   console.log("success3 : data3 saved");
                },
                ()=>{
                   console.log("fail3 : weak connection");
                }
            )
        },
        ()=>{
            console.log("fail2 : weak connection");
        }
      );
    },
   ()=>{
     console.log("fail : weak Connection");
   }
);