const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true }));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Abhi@2005'
});

let getRandomUser = ()=>{
  return [
   faker.string.uuid(),
   faker.internet.username(),
   faker.internet.email(),
   faker.internet.password(),

 ];
};

// let q = "INSERT INTO users (id, username, email, password) VALUES ?";

// let data =[];
// for(let i=1; i<=100; i++){
//   data.push(getRandomUser()); // 100 fake users data
// }

// try{
// connection.query(q, [data],(err , result)=>{
//   if(err) throw err;
//   console.log(result);
// });
// }catch(err){
//     console.log(err);
// }
// connection.end();

// count route
app.get("/" , (req , res) => {
  let q = `SELECT count(*) FROM users`;
  
  try{
    connection.query(q,(err , result)=>{
     if(err) throw err;
    let count = result[0]["count(*)"];
     res.render("home.ejs" , {count});
   });
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

app.get("/users" , (req , res) => {
  let q = `SELECT * FROM users`;

try{
    connection.query(q, (err , users)=>{
     if(err) throw err;
    //  console.log(result);
    //  res.send(result);
    res.render("showusers.ejs" , {users});
   });
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }

});

//edit route
app.get("/user/:id/edit" , (req ,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
try{
    connection.query(q, (err , result)=>{
     if(err) throw err;
     let user = result[0];
     res.render("edit.ejs" , {user});
   });
  }catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

//UPDATE ROUTE
app.patch("/user/:id" , (req , res) => {
res.send("updated");
});

app.listen("8080" ,()=>{
  console.log("server is litening port 8080");
});
