const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css"))); //default path for public 
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views")); // constant path for views 

app.get("/" , (req , res ) => {
    res.render('home');
});

app.get("/ig/:username" , (req , res) =>{
    const instaData = require("./data.json");
    console.log(instaData);
    // const followers = ["adam" , "bob" , "lucky" , "abhi"];
    let  {username} = req.params;
    let Data = instaData[username];
    console.log(Data);
// res.render("instagram.ejs" , {username , followers});
 if(Data){
res.render("instagram.ejs" , {Data});
 }else{
    res.render("error.ejs");
 }
});

app.get("/hello" , (req , res ) => {
    res.send('hello');
}); 

app.get("/rolldice" , (req , res ) => {
    let Diceval = Math.floor(Math.random()* 6) + 1;
    res.render('rolldice.ejs', {Diceval});
});

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});
