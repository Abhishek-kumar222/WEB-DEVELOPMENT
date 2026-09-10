const express = require("express");
const app = express();

// console.dir(app);
let port = 8080;

app.listen(port , ()=>{  // incoming request ko listen karta hai
    console.log(`app is listening port ${port}`);
});
// apep.use((req , res) => {
//     console.log("request received "); /// sabhi request ke same respose bhejta hai

//     // res.send("this is basic response");
 
//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // });
//    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>orange</li></ul>"
//    ili res.send(code);
// });

///diffrent request ke liye different rensponse bheje isiliye hum get method use karenge
 app.get("/" , (req , res) => {
   res.send("you contacted root path");
 });

//  app.get("/apple" , (req , res) => {
//    res.send("you contacted Apple path");
//  });

//  app.get("/orange" , (req , res) => {
//    res.send("you contacted Orange path");
//  });

//  ///default response for path
//  app.get("/*splate" , (req , res) => {
//    res.send("this path does not exist");
//  });

app.get("/:username/:id" , (req , res) => {
    let { username , id} = req.params;
   res.send(`Welcome to the page of @${username}`);
 });

 app.get("/search" , (req , res) =>{
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>")
    }
    res.send(`<h1>Search result for ${q}</h1>`);
 });
