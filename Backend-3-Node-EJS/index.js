const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views")); // constant path for views 

app.get("/" , (req , res ) => {
    res.render('home');
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
