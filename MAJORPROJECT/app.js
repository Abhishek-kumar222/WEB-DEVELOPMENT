const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/" , (req , res) =>{
    res.send("Hi, I am root");
}); 
app.get("/textlisting", async (req , res)=>{
 let samplelisting = new Listing({
    title:"My New villa",
    description: "By the beach",
    price: 12000,
    locatin: "Calangulate Goa",
    country: "India"
 });
  await samplelisting.save();
  console.log("sample was saved");
  res.send("successful testing");
});

app.listen(8080 , () => {
    console.log("server is listening to post 8080");
});