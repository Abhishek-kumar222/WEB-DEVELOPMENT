const figlet = require('figlet'); // package ko require karne ke liye ./ ki jarurat nhi8 padti 

figlet("Abhishek", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});