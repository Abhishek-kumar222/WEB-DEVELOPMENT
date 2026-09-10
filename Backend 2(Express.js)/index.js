const express = require("express");
const app = express();

// console.dir(app);
let port = 8080;

app.listen(port , ()=>{  // incoming request ko listen karta hai
    console.log(`app is listening port ${port}`);
});

app.use((req , res) => {
    console.log("request received ");
});