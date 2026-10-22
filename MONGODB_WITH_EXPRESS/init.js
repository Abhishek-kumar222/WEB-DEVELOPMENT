const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
        from: "Abhishek",
        to: "Anshika",
        message: "How are you",
        create_at: new Date()
    },
     {
        from: "Jay",
        to: "Naman",
        message: "Where are you",
        create_at: new Date()
    },
     {
        from: "Ashish",
        to: "Ramesh",
        message: "Give me my pan",
        create_at: new Date()
    },
     {
        from: "Raj",
        to: "Neha",
        message: "hello miss neha",
        create_at: new Date()
    },
     {
        from: "Sameer",
        to: "Swati",
        message: "go to hell",
        create_at: new Date()
    },
];

Chat.insertMany(allChats);  