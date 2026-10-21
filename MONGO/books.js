const mongoose = require('mongoose');

main()
 .then(( ) => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    auther:{
        type: String
    },
    price:{
        type: Number,
        min: [1, "Price is too low Amazon Selling"] // condition with err
    },
    discount:{
        type: Number,
        default: 0
    },
    category:{
        type: String,
        enum:["Fiction" , "Non Fiction"]
    }
});

const Book = mongoose.model("Books" , bookSchema);

Book.findByIdAndUpdate("6ad8851063937d98315387c0" , {price: -100} , {runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.message); // main err will print
});

// let book1 = new Book({
//  title: "Marvel Comics v2",
//  price: "850",
//  gerne: ["comics" , "superhero"]
// });

// book1
// .save()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err);
// });