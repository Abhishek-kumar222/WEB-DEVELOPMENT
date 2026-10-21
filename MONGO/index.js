const mongoose = require('mongoose');

main()
 .then(( ) => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User" , userSchema);

User.deleteMany({age:{$gt: 50}}).then((res) => {
  console.log(res);
});

// User.updateOne({name: "Rahul"} , {age: 35}) // sirf update karega
// User.findOneAndUpdate({name: "Rahul"} , {age: 55} , {new : true}) // update karke uski value bhi print kaaryega kya update hua h
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//  console.log(err);
// });


  // User.findOne({age:{$gt: 50}})
// User.findById({_id: "6ad688c91d6f69f95e4dd1be"})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.insertMany([
//   {name: "Tony" , email: "tony@yahoo.con", age: 56},
//   {name: "Brajesh" , email: "Brajesh@yahoo.con", age: 46},
//   {name: "Rahul" , email: "Rahul@yahoo.con", age: 50},
// ]).then((res) => {
//   console.log(res);
// });



// const user1 = new User({
//   name: "Abhi",
//   email: "Abhi@yahoo.com",
//   age: 48,
// });

// user1.save();

// const user2 = new User({
//   name: "Ram",
//   email: "Ram@yahoo.com",
//   age: 78,
// });

// user2
// .save().then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });